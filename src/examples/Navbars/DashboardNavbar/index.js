import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import { Button } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";

// Moonetrica Dashboard React components
import VuiBox from "components/VuiBox";

// Moonetrica Dashboard React example components
import Breadcrumbs from "examples/Breadcrumbs";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Moonetrica Dashboard React context
import {
  useVisionUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

import { useDispatch, useSelector } from "react-redux";
//web3 wallet connect
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../../layouts/main/components/Connectors";
import Web3 from "web3";

import { toastr } from "react-redux-toastr";
import { setWallet } from "../../../slices/app";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /**
     The event listener that's calling the handleTransparentNavbar function when
     scrolling the window.
     */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu

  //wallet connect
  const { address, Id } = useSelector(state => state.app.wallet);
  const dispatcher = useDispatch();
  const web3React = useWeb3React();
  const { active, account, chainId, library, connector, error, activate, deactivate } = web3React

  const walletConnect = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };
  const disconnect = async () => {
    try {
      deactivate();
      dispatcher(setWallet({
        address: null,
        Id: null,
      }));
    } catch (ex) {
      console.log(ex);
    }
  };



  useEffect(() => {
    if (active) {
      switch (chainId) {
        case 1:
          toastr.success("Congratulation!", "ETH Mainnet Connected");
          break;
        case 3:
          toastr.warning("Warning!", "Ropsten Testnet Connected");
          break;
        case 4:
          toastr.warning("Warning!", "Rinkeby Testnet Connected");
          break;
        case 5:
          toastr.warning("Warning!", "Gorli Testnet Connected");
          break;
        case 56:
          toastr.success("Congratulation!", "BSC Mainnet Connected");
          break;
        case 97:
          toastr.warning("Warning!", "BSC Testnet Connected");
          break;
        case 137:
          toastr.success("Congratulation!", "Polygon Mainnet Connected");
          break;
        default:
          toastr.error("Alert", "Please change your wallet network!");
          break;
      }

      dispatcher(setWallet({
        address: account,
        Id: chainId,
      }));
    }

  }, [active, account, chainId]);

  useEffect(() => {
    if (error) {
      toastr.error(error.name, error.message);
    }
  }, [error])

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <VuiBox color="inherit" mb={{ xs: 2, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
          <IconButton
            size="large"
            color="inherit"
            sx={navbarMobileMenu}
            onClick={handleMiniSidenav}
          >
            <Icon className={"text-white"}>{miniSidenav ? "menu_open" : "menu"}</Icon>
          </IconButton>
        </VuiBox>
        {isMini ? null : (
          <VuiBox sx={(theme) => navbarRow(theme, { isMini })}>
            {address !== null ? <VuiBox color={light ? "white" : "inherit"} margin={"auto"}>
                <Button variant="outlined" startIcon={<AccountBalanceWalletIcon />} disabled>
                  {address.substr(0, 5)}...{address.substr(address.length - 5, address.length - 1)}
                </Button>
                <IconButton
                  size="large"
                  color="white"
                  sx={navbarIconButton}
                  onClick={disconnect}
                >
                  <LogoutIcon />
                </IconButton>
              </VuiBox> :
              <VuiBox color={light ? "white" : "inherit"} margin={"auto"}>
                <Button variant="outlined" onClick={walletConnect} startIcon={<AccountBalanceWalletIcon />}>
                  Wallet Connect
                </Button>
              </VuiBox>
            }

          </VuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
