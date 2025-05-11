import React, { useEffect, useState, useRef } from "react";
import { useAlert } from "react-alert";
import MetaData from "../layouts/MataData/MataData";
import Loader from "../layouts/loader/Loader";
import Sidebar from "./Siderbar";
import Navbar from "./Navbar";
import InputAdornment from "@material-ui/core/InputAdornment";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PercentIcon from "@mui/icons-material/Percent";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { TextField, Typography, FormControl, Button, Avatar } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import useStyles from "../User/LoginFromStyle";
import axios from "axios";

const SeasonalOffer = () => {
  const [offer, setOffer] = useState({
    offerName: "",
    offerPercentage: 0,
    offerEndDate: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  const alert = useAlert();
  const classes = useStyles();

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("/api/v1/categories");
        setCategories(data.categories);
      } catch (error) {
        alert.error("Failed to fetch categories");
      }
    };
    fetchCategories();
  }, [alert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/v1/offers/create", offer);
      alert.success("Offer created successfully!");
      setOffer({
        offerName: "",
        offerPercentage: 0,
        offerEndDate: "",
        category: "",
      });
    } catch (error) {
      alert.error("Failed to create offer.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (e) => {
    setOffer({ ...offer, category: e.target.value });
    setIsCategory(true);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Create Seasonal Offer" />
          <div className={classes.updateProduct}>
            <div className={!toggle ? `${classes.firstBox1}` : `${classes.toggleBox1}`}>
              <Sidebar />
            </div>

            <div className={classes.secondBox1}>
              <div className={classes.navBar1}>
                <Navbar toggleHandler={toggleHandler} />
              </div>

              <div className={`${classes.formContainer} ${classes.formContainer2}`}>
                <form className={`${classes.form} ${classes.form2}`} onSubmit={handleSubmit}>
                  <Avatar className={classes.avatar}>
                    <AddCircleOutlineIcon />
                  </Avatar>
                  <Typography variant="h5" component="h1" className={classes.heading}>
                    Create Seasonal Offer
                  </Typography>

                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Offer Name"
                    value={offer.offerName}
                    onChange={(e) => setOffer({ ...offer, offerName: e.target.value })}
                    required
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LocalOfferIcon style={{ color: "#414141" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Offer Percentage"
                    type="number"
                    value={offer.offerPercentage}
                    onChange={(e) => setOffer({ ...offer, offerPercentage: e.target.value })}
                    required
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PercentIcon style={{ color: "#414141" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <div className={classes.selectOption}>
                    {!isCategory && (
                      <Typography variant="body2" className={classes.labelText}>
                        Choose Category
                      </Typography>
                    )}
                    <FormControl className={classes.formControl}>
                      <Select
                        variant="outlined"
                        fullWidth
                        value={offer.category}
                        onChange={handleCategoryChange}
                        className={classes.select}
                      >
                        <MenuItem value=""><em>Choose Category</em></MenuItem>
                        {categories.map((cate, index) => (
                          <MenuItem key={index} value={cate}>
                            {cate}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <TextField
                    variant="outlined"
                    fullWidth
                    label="End Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={offer.offerEndDate}
                    onChange={(e) => setOffer({ ...offer, offerEndDate: e.target.value })}
                    required
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CalendarTodayIcon style={{ color: "#414141" }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    variant="contained"
                    className={classes.loginButton}
                    fullWidth
                    type="submit"
                    disabled={loading}
                  >
                    Create
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SeasonalOffer;
