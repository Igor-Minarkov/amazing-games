import React, { useState, useEffect, useContext, Fragment } from "react";
import { AppContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import DashboardDetails from "./dashboardDetails/DashboardDetails";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BoxShadowBox = styled("div")(
  ({ theme }) => `
  margin: ${theme.spacing(1)};
  padding: ${theme.spacing(2)};
  border:1px solid black;
  box-shadow: ${theme.shadows[7]};
`
);

const BoxShadow = styled("div")(
  ({ theme }) => `
  margin: ${theme.spacing(1)};
  padding: ${theme.spacing(2)};
  box-shadow: ${theme.shadows[7]};
`
);

const BoxShadowCard = styled("div")(
  ({ theme }) => `
  // margin: ${theme.spacing(1)};
  // padding: ${theme.spacing(2)};
  box-shadow: ${theme.shadows[7]};
`
);

function Dashboard() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [customData, setCustomData] = useState([]);
  const [setter, switchSetter] = useState(false);
  const { addData, presentersData, tablesData } = useContext(AppContext);
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  const [switchOn, setSwitchOn] = useState(true);

  useEffect(() => {
    setTitle(title);
    setTitle("");
    switchData();
  }, [presentersData, tablesData, data]);

  const switchData = () => {
    if (location.pathname === "/presenters") {
      setData(presentersData);
      setCustomData(presentersData);
      switchSetter(true);
    } else {
      setData(tablesData);
      setCustomData(tablesData);
      switchSetter(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(title, customData, setter);
  };

  return (
    <Fragment>
      <BoxShadowBox>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setSwitchOn(!switchOn);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Grid View" icon={<ViewComfyIcon />} />
          <BottomNavigationAction label="List View" icon={<ViewListIcon />} />
        </BottomNavigation>
      </BoxShadowBox>
      <form onSubmit={handleSubmit} className="form">
        <BoxShadow
          sx={{ p: 2, m: 2, display: "flex", backgroundColor: "#175593" }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            outline="none"
            required
            sx={{
              mr: 1,
              backgroundColor: "white",
              outline: "none",
              borderRadius: "4px",
            }}
            size="small"
            data-testid="custom-element"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
          />
          <div>
            <Button variant="contained" size="medium" type="submit">
              Save
            </Button>
          </div>
        </BoxShadow>
      </form>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ p: 2 }}
      >
        {data?.map((data) => {
          if (switchOn) {
            return (
              <Grid item md={4} sm={6} xs={12} key={data.id}>
                <BoxShadowCard>
                  <Card
                    variant="outlined"
                    key={data.id}
                    sx={{
                      p: 2,
                      backgroundColor: "white",
                      border: "3px solid white",
                    }}
                  >
                    <DashboardDetails
                      key={data.id}
                      name={data.name}
                      id={data.id}
                      customData={customData}
                      setter={setter}
                    />
                  </Card>
                </BoxShadowCard>
              </Grid>
            );
          }
          return (
            <Grid item md={12} sm={12} xs={12} key={data.id} sx={{ p: 2 }}>
              <Card
                variant="outlined"
                key={data.id}
                sx={{
                  p: 2,
                  backgroundColor: "white",
                  border: "3px solid white",
                }}
              >
                <DashboardDetails
                  key={data.id}
                  name={data.name}
                  id={data.id}
                  customData={customData}
                  setter={setter}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
}

export default Dashboard;
