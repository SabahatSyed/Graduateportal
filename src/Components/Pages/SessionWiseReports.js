import React, { useState, useEffect, useRef } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import studentService from "../../API/students";
import profile from "../../../src/avatar-1.jpg";
import synopsisService from "../../API/synopsis";
import "../../Components/UI/ActiveTab.css";

import {
  Autocomplete,
  Button,
  CircularProgress,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import thesisService from "../../API/thesis";
import { useReactToPrint } from "react-to-print";
import sessionsService from "../../API/sessions";
import ReportTemplate from "../UI/ReportTemplate";

const statuses = ["Scheduled", "Unscheduled", "Pass Out"];

export default function SessionWiseReports() {
  const componentRef = useRef();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  const [reportType, setReportType] = useState("Synopsis");
  const [selectedReport, setSelectedReport] = useState([]);
  const [submittedSynopsis, setSubmittedSynopsis] = useState([]);
  const [submittedThesis, setSubmittedThesis] = useState([]);
  const [submittedReport, setSubmittedReport] = useState([]);
  const [filteredSynopsis, setFilteredSynopsis] = useState([]);
  const [filteredReport, setFilteredReport] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  useEffect(() => {
     function fetchData() {
      sessionsService.getSessions().then((res)=>{
        setSessions(res)
      });
    
      studentService.getStudents().then((res)=>{
        setStudents(res);
      });
       synopsisService.getSubmittedSynopsis().then((res)=>{
        setSubmittedSynopsis(res)
       });
      thesisService.getSubmittedThesis().then((res)=>{
        setSubmittedThesis(res)
      });
      console.log("students",students);

      console.log(sessions);
      console.log(submittedSynopsis);
      console.log(submittedThesis);

      let selectedStudents = [];

      students.forEach((student) => {
        let filteredSynopsis = submittedSynopsis.filter(
          (synopsis) => synopsis?.student_id?._id === student._id
        );
        let filteredThesis = submittedThesis.filter(
          (synopsis) => synopsis?.student_id?._id === student._id
        );
          console.log("slength",filteredSynopsis.length)
          console.log("tlength",filteredThesis.length)

        if (filteredSynopsis.length > 0 && filteredThesis.length > 0) {
          selectedStudents.push({
            student_id: filteredSynopsis[0]?.student_id,
            session: filteredSynopsis[0]?.student_id?.session_id?.title,
            synopsisStatus: filteredSynopsis[0]?.synopsisStatus,
            synopsisTitle: filteredSynopsis[0]?.synopsisTitle,
            thesisStatus: filteredThesis[0]?.thesisStatus,
            thesisTitle: filteredThesis[0]?.thesisTitle,
          });
        } else if (filteredThesis.length > 0) {
          selectedStudents.push({
            student_id: filteredThesis[0]?.student_id,
            session: filteredThesis[0]?.student_id?.session_id?.title,
            thesisStatus: filteredThesis[0]?.thesisStatus,
            thesisTitle: filteredThesis[0]?.thesisTitle,
          });
        } else if (filteredSynopsis.length > 0) {
          selectedStudents.push({
            student_id: filteredSynopsis[0]?.student_id,
            session: filteredSynopsis[0]?.student_id?.session_id?.title,
            synopsisStatus: filteredSynopsis[0]?.synopsisStatus,
            synopsisTitle: filteredSynopsis[0]?.synopsisTitle,
          });
        }
      });
      setSelectedReport(selectedStudents);
      setFilteredReport(selectedStudents);
      setSessions(sessions);

      setLoading(false);
      
    }
    fetchData();
  }, []);

  console.log(selectedReport);
  console.log(sessions);
  console.log("loadins",loading)
  useEffect(() => {
    console.log(selectedSession);

    if (selectedSession) {
      let std = [];

      selectedReport.forEach((student) => {
        if (student?.session === selectedSession?.title) {
          std.push(student);
        }
      });
      setFilteredReport(std);
      setStudents(std);
    } else {
      setFilteredReport(selectedReport);
      setStudents([]);
    }
  }, [selectedSession, selectedStudent]);

  useEffect(() => {
    console.log(selectedStudent);

    if (selectedStudent) {
      let std = [];

      selectedReport.forEach((student) => {
        if (
          student?.student_id?.username === selectedStudent?.student_id?.username
        ) {
          std.push(student);
        }
      });
      setFilteredReport(std);
    }
  }, [selectedStudent, selectedSession]);

  console.log(filteredReport);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const sessionProps = {
    options: sessions,
    getOptionLabel: (session) => session?.title || "",
  };
  const studentProps = {
    options: students,
    getOptionLabel: (student) => student?.student_id?.username || "",
  };

  return (
    <>
      <Box sx={{ minWidth: 120, mb: 6 }}>
        <Typography
          sx={{ mb: 4, color: "#572E74", fontWeight: "500" }}
          textAlign={"center"}
          variant="h5"
        >
          Session Wise Report
        </Typography>
        <FormControl sx={{ mb: 1 }}>
          <FormLabel color="secondary">Student</FormLabel>
          <RadioGroup
            row
            name="studentType"
            value={reportType}
            onChange={(e) => {
              setReportType(e.target.value);
            }}
          >
            <FormControlLabel
              value="Synopsis"
              control={<Radio color="secondary" />}
              label="Synopsis"
            />
            <FormControlLabel
              value="Thesis"
              control={<Radio color="secondary" />}
              label="Thesis"
            />
          </RadioGroup>
        </FormControl>

        <Box style={{ display: "flex", gap: "1%" }}>
          <Box width={"49%"} sx={{ mb: 4 }}>
            <Autocomplete
              fullWidth
              {...sessionProps}
              id="controlled-demo"
              value={selectedSession}
              onChange={(value, newValue) => {
                let session = newValue;
                console.log(session);
                setSelectedSession(session);
                setSelectedStudent(null);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Select Session"
                  variant="outlined"
                  color="secondary"
                />
              )}
            />
          </Box>
          <Box width={"49%"} sx={{ mb: 4 }}>
            <Autocomplete
              fullWidth
              {...studentProps}
              id="controlled-demo"
              value={selectedStudent}
              onChange={(value, newValue) => {
                let std = newValue;
                console.log(std);
                setSelectedStudent(std);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Select Student"
                  variant="outlined"
                  color="secondary"
                />
              )}
            />
          </Box>
        </Box>
      </Box>
      {loading ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "4rem",
          }}
        >
          <CircularProgress size={60} thickness={4.5} color="secondary" />
        </Box>
      ) : (
        <>
          <div ref={componentRef} className="supervisorWiseReport">
            <Box
              sx={{
                marginTop: 2,
                marginBottom: 4,
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #f2f2f2",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: "350px",
                  }}
                  alt="Remy Sharp"
                  src="../assets/images/cui.png"
                />
                <Typography
                  style={{ marginLeft: "-13rem", marginTop: "3px" }}
                  component="h1"
                  variant="h4"
                >
                  COMSATS UNIVERSITY ISLAMABD
                </Typography>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  style={{ marginTop: "-2rem" }}
                  component="h1"
                  variant="h5"
                >
                  GRADUATE OFFICE
                </Typography>
              </div>
            </Box>
            {filteredReport.map((report) => {
              return (
                <div>
                  {reportType === "Synopsis" && report?.synopsisStatus && (
                    <ReportTemplate report={report} reportType={reportType} />
                  )}
                  {reportType === "Thesis" && report?.thesisStatus && (
                    <ReportTemplate report={report} reportType={reportType} />
                  )}
                </div>
              );
            })}
          </div>
          <Button
            fullWidth
            type="button"
            variant="contained"
            color="secondary"
            sx={{ mb: 2 }}
            onClick={handlePrint}
          >
            Print PDF
          </Button>
        </>
      )}
    </>
  );
}
