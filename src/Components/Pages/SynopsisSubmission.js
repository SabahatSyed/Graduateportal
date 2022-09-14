import {
  TextField,
  Button,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import studentService from "../../API/students";
import synopsisService from "../../API/synopsis";
import BackdropModal from "../UI/BackdropModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { set } from "date-fns";

export default function SynopsisSubmission() {
  const {
    user: {
      user: {
        student: {
          program_id: { programShortName },
        },
      },
    },
  } = useSelector((state) => state.auth);
  const {
    user
  } = useSelector((state) => state.auth);
  const navigate=useNavigate();
  
  // console.log(programShortName);
  const [supervisors, setSupervisors] = useState([]);
  const [deadlines, setDeadlines] = useState([]);
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [pass, setpass] = useState(false);
const [synopsissub,setsub]=useState(false)
const [rebuttal,setreb]=useState(false)
const [clear,setclear]=useState(false)
  const [scheduleid,setsid]=useState();
  const [evaluationid,seteid]=useState();

  const getSupervisors = async () => {
    let data = await studentService.getSupervisors();
    console.table("SubmissionM", data?.supervisors);
    setSupervisors(data?.supervisors);
  };
  const getDeadlinesData = async () => {
    let res = await synopsisService.getDeadlines();
    console.log(res);
    let filteredDeadlines = [];
    if (programShortName.toLowerCase().includes("ms")) {
      filteredDeadlines = res.filter((item) => item.program === "Masters");
    } else {
      filteredDeadlines = res.filter((item) => item.program === "PhD");
    }
    setDeadlines(filteredDeadlines);
  };
  const getSubmission=async()=>{
    await synopsisService.checkSubmission(user.user.student._id).then(res=>{
      
       console.log("hjeghjs",res)
      if(res.data.data!=null){
        setsub(true)
        if(res.data.data!=null && res.data.data.goEvaluation.goIsRequiredAgain=="Yes"){
          console.log("hello");
          seteid(res.data.data._id)
          setsid(res.data.data.Schedule[0]._id)
          setreb(true)
        }
        if(res.data.data!=null && res.data.data.goEvaluation.goIsRequiredAgain=="No"){
          console.log("hello1234");

          setclear(true)
        }
      }
      
     }).catch(err=>{
      console.log("ererwe",err)
     })
  }

  const getsubjectcount=()=>{
    var core=0;
    var rm=0;
    var tot=0;
    user.user.student.Result.map((item)=>{
      item.Result.map((value)=>{
        if((value.Rank).toLowerCase()=="core"){
          core++;
        }if((value.Rank).toLowerCase()=="rm"){
          rm++;
        }
        tot++;
      })
    })
    console.log("tot",tot);
    console.log("RM",rm);
    console.log("Crore",core);
    if(tot>=6 && rm>=1 && core>=3 ){
      setpass(true);
      console.log("hereforpass")
    }

  }
  useEffect(() => {
    getSupervisors();
    getDeadlinesData();
    getSubmission()
    getsubjectcount();
  }, [programShortName]);

  const validationSchema = yup.object({
    synopsisTitle: yup.string().required(),
    supervisor: yup.string().required(),
    coSupervisor: yup.string().required(),
    synopsisTrack: yup.string().required(),
    // synopsisDocument: yup.array(),
    // synopsisPresentation: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      synopsisTitle: "",
      supervisor: "",
      coSupervisor: "",
      synopsisTrack: "",
      synopsisDocument: [],
      synopsisPresentation: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      getDeadlinesData();
      console.log(values);
      let formData = new FormData();
      formData.append("synopsisTitle", values.synopsisTitle);
      formData.append("supervisor", values.supervisor);
      formData.append("coSupervisor", values.coSupervisor);
      formData.append("synopsisTrack", values.synopsisTrack);
      formData.append("synopsisDocument", values.synopsisDocument[0]);
      formData.append("synopsisPresentation", values.synopsisPresentation[0]);
      if(rebuttal==true){
        console.log("iamsbahaat")
      formData.append("schedule_id",scheduleid);
      formData.append("evaluation_id",evaluationid)
      let res = await synopsisService.submitRebuttal(formData);
      if (res?.status === 500) {
        setShowErrorModal(true);
        console.log(res);
      } else {
        setShowSubmitModal(true);
      }
      console.log(res);
      }
      // console.log(values);
      else{
      let res = await synopsisService.submitSynopsis(formData);
      if (res?.status === 500) {
        setShowErrorModal(true);
        console.log(res);
      } else {
        setShowSubmitModal(true);
      }
      console.log(res);
    }
      // studentService.uploadFile(formData);
    },
  });

  return (
    <>{user.user.student.Semester<=2?<div
      style={{
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "500",
      }}
    >
      No Submission Required Yet
    </div>:
    (pass?
      

      (deadlines[0]? (!synopsissub?(

        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            sx={{
              width: "100%",
              marginBottom: "15px",
            }}
            name="synopsisTitle"
            label="Synopsis Title"
            color="secondary"
            variant="outlined"
            value={formik.values.synopsisTitle}
            onChange={formik.handleChange}
            error={
              formik.touched.synopsisTitle &&
              Boolean(formik.errors.synopsisTitle)
            }
            helperText={
              formik.touched.synopsisTitle && formik.errors.synopsisTitle
            }
          />
          <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
            <FormControl fullWidth color="secondary">
              <InputLabel>Supervisor</InputLabel>
              <Select
                name="supervisor"
                label="Supervisor"
                value={formik.values.supervisor}
                onChange={formik.handleChange}
                error={
                  formik.touched.supervisor && Boolean(formik.errors.supervisor)
                }
                helperText={
                  formik.touched.supervisor && formik.errors.supervisor
                }
              >
                {supervisors?.map((item) => {
                  return (
                    <MenuItem key={item._id} value={item._id}>
                      {item.username}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
            <FormControl fullWidth color="secondary">
              <InputLabel>Co-Supervisor</InputLabel>
              <Select
                name="coSupervisor"
                value={formik.values.coSupervisor}
                onChange={formik.handleChange}
                error={
                  formik.touched.coSupervisor &&
                  Boolean(formik.errors.coSupervisor)
                }
                helperText={
                  formik.touched.coSupervisor && formik.errors.coSupervisor
                }
                label="Co-Supervisor"
              >
                {supervisors?.map((item) => {
                  return (
                    <MenuItem key={item._id} value={item._id}>
                      {item.username}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            name="synopsisTrack"
            label="Synopsis Track"
            color="secondary"
            variant="outlined"
            value={formik.values.synopsisTrack}
            onChange={formik.handleChange}
            error={
              formik.touched.synopsisTrack &&
              Boolean(formik.errors.synopsisTrack)
            }
            helperText={
              formik.touched.synopsisTrack && formik.errors.synopsisTrack
            }
          />

          <div>
            <div>Synopsis Document:</div>
            <input
              type="file"
              name="synopsisDocument"
              min={1}
              onChange={(event) => {
                formik.setFieldValue(
                  "synopsisDocument",
                  event.currentTarget.files
                );
              }}
            />
            <div>Synopsis Presentation :</div>
            <input
              type="file"
              min={1}
              name="synopsisPresentation"
              onChange={(event) => {
                formik.setFieldValue(
                  "synopsisPresentation",
                  event.target.files
                );
              }}
            />
            <span style={{ color: "red" }}>{isError && error}</span>
            <Button
              type="submit"
              sx={{ ml: "80%", mt: "20px" }}
              variant="contained"
              size="large"
              color="secondary"
            >
              Submit
            </Button>
          </div>

          <BackdropModal
            showModal={showSubmitModal}
            setShowModal={setShowSubmitModal}
            title={"Submit!"}
          >
            Synopsis has been submitted.
          </BackdropModal>
          <BackdropModal
            showModal={showErrorModal}
            setShowModal={setShowErrorModal}
            title={"Error!"}
          >
            Something went wrong.
          </BackdropModal>
        </Box>
      ) : (
        
        (rebuttal?

          <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            sx={{
              width: "100%",
              marginBottom: "15px",
            }}
            name="synopsisTitle"
            label="Synopsis Title"
            color="secondary"
            variant="outlined"
            value={formik.values.synopsisTitle}
            onChange={formik.handleChange}
            error={
              formik.touched.synopsisTitle &&
              Boolean(formik.errors.synopsisTitle)
            }
            helperText={
              formik.touched.synopsisTitle && formik.errors.synopsisTitle
            }
          />
          <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
            <FormControl fullWidth color="secondary">
              <InputLabel>Supervisor</InputLabel>
              <Select
                name="supervisor"
                label="Supervisor"
                value={formik.values.supervisor}
                onChange={formik.handleChange}
                error={
                  formik.touched.supervisor && Boolean(formik.errors.supervisor)
                }
                helperText={
                  formik.touched.supervisor && formik.errors.supervisor
                }
              >
                {supervisors?.map((item) => {
                  return (
                    <MenuItem key={item._id} value={item._id}>
                      {item.username}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
            <FormControl fullWidth color="secondary">
              <InputLabel>Co-Supervisor</InputLabel>
              <Select
                name="coSupervisor"
                value={formik.values.coSupervisor}
                onChange={formik.handleChange}
                error={
                  formik.touched.coSupervisor &&
                  Boolean(formik.errors.coSupervisor)
                }
                helperText={
                  formik.touched.coSupervisor && formik.errors.coSupervisor
                }
                label="Co-Supervisor"
              >
                {supervisors?.map((item) => {
                  return (
                    <MenuItem key={item._id} value={item._id}>
                      {item.username}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <TextField
            sx={{ width: "100%", marginBottom: "15px" }}
            name="synopsisTrack"
            label="Synopsis Track"
            color="secondary"
            variant="outlined"
            value={formik.values.synopsisTrack}
            onChange={formik.handleChange}
            error={
              formik.touched.synopsisTrack &&
              Boolean(formik.errors.synopsisTrack)
            }
            helperText={
              formik.touched.synopsisTrack && formik.errors.synopsisTrack
            }
          />

          <div>
            <div>Synopsis Document:</div>
            <input
              type="file"
              name="synopsisDocument"
              min={1}
              onChange={(event) => {
                formik.setFieldValue(
                  "synopsisDocument",
                  event.currentTarget.files
                );
              }}
            />
            <div>Synopsis Presentation :</div>
            <input
              type="file"
              min={1}
              name="synopsisPresentation"
              onChange={(event) => {
                formik.setFieldValue(
                  "synopsisPresentation",
                  event.target.files
                );
              }}
            />
            <span style={{ color: "red" }}>{isError && error}</span>
            <Button
              type="submit"
              sx={{ ml: "80%", mt: "20px" }}
              variant="contained"
              size="large"
              color="secondary"
            >
              Submit
            </Button>
          </div>

          <BackdropModal
            showModal={showSubmitModal}
            setShowModal={setShowSubmitModal}
            title={"Submit!"}
          >
            Synopsis has been submitted.
          </BackdropModal>
          <BackdropModal
            showModal={showErrorModal}
            setShowModal={setShowErrorModal}
            title={"Error!"}
          >
            Something went wrong.
          </BackdropModal>
        </Box>:
        (clear?
          <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "500",
          color:"maroon"
        }}
      >
        Synopsis Cleared!!
      </div>:<></>
          )
        )
      )):
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "500",
          color:"maroon"
        }}
      >
        Nothing To Submit!!
      </div>):
      <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          Cannot Submit Synopsis
          <div
      style={{
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "500",
        color:"maroon"
      }}
    >
      Not Enough Subject cleared!!
    </div>
        </div>
      
      )}
    </>
  );
}