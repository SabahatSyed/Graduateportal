import ManagePrograms from "../../Pages/managePrograms";
import AddManageProgram from "../../Pages/AddManageProgram";
import AddSupervisoryCommittee from "../../Pages/AddSupervisoryCommittee";
import AddProgressReport from "../../Pages/AddProgressReport";
import AddSession from "../../Pages/AddSession";
import AddStudent from "../../Pages/AddStudent";
import ChangePassword from "../../Pages/ChangePassword";
import Home from "../../Pages/Home";
import ManageProgressReport from "../../Pages/ManageProgressReport";
import ManageSession from "../../Pages/ManageSession";
import ManageStudent from "../../Pages/ManageStudent";
import ManageSupervisoryCommittee from "../../Pages/ManageSupervisoryCommittee";
import ProgramWiseReports from "../../Pages/ProgramWiseReports";
import Verified from "../../Pages/Notverified";

import SendNotificationAll from "../../Pages/SendNotificationAll";
import SendNotificationMS from "../../Pages/SendNotificationMS";
import SendNotificationMSdefault from "../../Pages/SendNotificationMSdefault";

import SendNotificationStudentDefault from "../../Pages/SendNotificationStudentDefault";


import EvaluateSynopsisMS from "../../Pages/EvaluateSynopsisMS";
import EvaluateSynopsisPhD from "../../Pages/EvaluateSynopsisPhD";
import SessionWiseReports from "../../Pages/SessionWiseReports";
import SupervisorReports from "../../Pages/SuperivorReports";

import ManageNotification from "../../Pages/managenotification";
import SynopsisWiseReports from "../../Pages/SummaryReport";
import ThesisWiseReports from "../../Pages/ThesisWiseReports";
import ViewFaculty from "../../Pages/ViewFaculty";

import ManageStudentNotification from "../../Pages/managestudentnotification";

import ViewCourses from "../../Pages/ViewCourses";

import ViewMSStudentDetail from "../../Pages/ViewMSStudentDetail";
import ViewPhDStudentDetail from "../../Pages/ViewPhDStudentDetail";
import AdminDashboard from "../../../Dashboards/AdminDashboard";
import VerifyStudentData from "../../Pages/VerifyStudentData"

import ViewMSStudent from "../../Pages/ViewMSStudent";
import ViewPhDStudent from "../../Pages/ViewPhDStudent";

import SendSynopsisReport from "../../Pages/SendSynopsisReport";
import SendThesisReport from "../../Pages/SendThesisReport";
import ViewSynopsisReport from "../../Pages/ViewSynopsisReport";
import ViewThesisReport from "../../Pages/ViewThesisReport";
import PendingThesis from "../../Pages/PendingThesis";
import ManageSynopsisSchedule from "../../Pages/ManageSynopsisSchedule";
import GenerateSynopsisReport from "../../Pages/GenerateSynopsisReport";
import GenerateThesisReport from "../../Pages/GenerateThesisReport";
import ManageThesisSchedule from "../../Pages/ManageThesisSchedule";
import AddCourses from "../../Pages/AddCourses";
import ManageStudentResult from "../../Pages/ManageStudentResult";
import Evaluations from "../../Pages/Evaluations"
import ManageStudentResultDetail from "../../Pages/ManageStudentResultDetail";
import EvaluationsTh from "../../Pages/EvaluationsThesis"


import React,{useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import SynopsisSubmission from "../../Pages/SynopsisSubmission";
import ThesisSubmission from "../../Pages/ThesisSubmission";
import EditProfile from "../../Pages/EditProfile";
import ViewAnnouncement from "../../Pages/ViewAnnouncement";
import ViewNotification from "../../Pages/ViewNotification";
import SignUp from "../../UI/SignUp";
import SignIn from "../SignIn";
import EvaluateThesisMS from "../../Pages/EvaluateThesisMS";
import EvaluateThesisPhD from "../../Pages/EvaluateThesisPhD";
import AddFaculty from "../../Pages/AddFaculty";
import { useSelector } from "react-redux";
import ManageDeadline from "../../Pages/ManageDeadline";
import CreateSynopsisSchedule from "../../Pages/CreateSynopsisSchedule";
import CreateThesisSchedule from "../../Pages/CreateThesisSchedule";
import AddSupervisoryCommitteeStudent from "../../Pages/AddSupervisoryCommitteeStudent";
import HomeMsCor from "../../Pages/HomeMsCor";
import HomePhdCor from "../../Pages/HomePhdCor";
import HomeStudentMs from "../../Pages/HomeStudentMs";
import HomeStudentPhd from "../../Pages/HomeStudentPhd";
import HomeGo from "../../Pages/HomeGo";
import HomeGac from "../../Pages/HomeGac";
import HomeSupervisor from "../../Pages/HomeSupervisor";
import UpdateThesisStatus from "../../Pages/UpdateThesisStatus";
import StatusCodes from "../StatusCodes";
import SendNotificationPhD from "../../Pages/SendNotificationPhD";
import SendNotificationPhDdefault from "../../Pages/SendNotificationPhDdefault";
import VerifyRebuttal from "../../Pages/VerifyRebuttal"
import ForgotPassword from "../ForgotPassword";
import ResetPassword from "../ResetPassword";
import SendAnnouncement from "../../Pages/SendAnnouncement";
import SuperivorWiseReports from "../../Pages/SupervisorWiseReports";
import ProcessedReports from "../../Pages/ProcessedReports";
import InprocessReports from "../../Pages/InprocessReports";
import MyStudent from "../../Pages/MyStudents";
import MyStudents from "../../Pages/MyStudents";
import studentService from "../../../API/students"
import Notverified from '../../Pages/Notverified'
import NotverifiedPHD from '../../Pages/Notverifiedphd'
import ReportTemplateVerify from "../ReportTemplateVerify";
import NotVerifiedPage from '../../Pages/Notverifiedpage'
import Result from '../../Pages/ResultData'
import CreateSchedules from '../../Pages/CreateSchedules'
import Template from "../DocumentTemplate"
const AdminRoutes = (props) => {
  const { user } = useSelector((state) => state.auth);
  const { userRoles } = useSelector((state) => state.userRoles);


  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log("isLoggedIn",isLoggedIn);
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/ResetPassword/:token" element={<ResetPassword />} />
      {isLoggedIn ? (
      
     
      
        <>
          <Route path="/Dashboard" element={<AdminDashboard />}>
            <Route path="/Dashboard/HomeAdmin" element={<Home />} />
            <Route path="/Dashboard/HomeMsCor" element={<HomeMsCor />} />
            <Route path="/Dashboard/HomeMSS" element={<Notverified />} />

            <Route path="/Dashboard/HomeePHD" element={<NotverifiedPHD />} />
            <Route path="/Dashboard/Verify" element={<NotVerifiedPage />} />
            <Route path="/Dashboard/HomePhDCor" element={<HomePhdCor />} />
            <Route path="/Dashboard/HomeMs" element={<HomeStudentMs />} />
            <Route path="/Dashboard/HomePhd" element={<HomeStudentPhd />} />
            <Route path="/Dashboard/HomeGo" element={<HomeGo />} />
            <Route path="/Dashboard/HomeGac" element={<HomeGac />} />
            <Route path="/Dashboard/AddCourses" element={<AddCourses />} />
            <Route path="/Dashboard/VerifyRebuttal" element={<VerifyRebuttal />} />
            <Route path="/Dashboard/Studentdetail" element={<ReportTemplateVerify/>} />
            <Route path="/Dashboard/Studentresult" element={<Result/>} />
            <Route path="/Dashboard/Display" element={<Template/>} />
            <Route path="/Dashboard/CreateSchedules" element={<CreateSchedules/>} />

            <Route path="/Dashboard/Evaluations" element={<Evaluations/>} />
            <Route path="/Dashboard/EvaluationsTh" element={<EvaluationsTh/>} />

            <Route
              path="/Dashboard/UpdateStatus"
              element={<UpdateThesisStatus />}
            />
            <Route
              path="/Dashboard/HomeSupervisor"
              element={<HomeSupervisor />}
            />
            <Route
              path="/Dashboard/ManagePrograms"
              element={<ManagePrograms />}
            />
            <Route
              path="/Dashboard/ManageStudentResult"
              element={<ManageStudentResult />}
            />
             <Route
              path="/Dashboard/ManageStudentResultDetail"
              element={<ManageStudentResultDetail />}
            />
            <Route
              path="/Dashboard/AddPrograms"
              element={<AddManageProgram />}
            />
            <Route
              path="/Dashboard/ManageSessions"
              element={<ManageSession />}
            />
            <Route path="/Dashboard/AddSessions" element={<AddSession />} />
            <Route path="/Dashboard/ViewFaculty" element={<ViewFaculty />} />
            <Route path="/Dashboard/ViewCourses" element={<ViewCourses />} />

            <Route path="/Dashboard/AddFaculty" element={<AddFaculty />} />
            <Route
              path="/Dashboard/ManageStudents"
              element={<ManageStudent />}
            />
            <Route path="/Dashboard/MyStudents" element={<MyStudents />} />
            <Route path="/Dashboard/AddStudent" element={<AddStudent />} />
            <Route
              path="/Dashboard/ManageDeadline"
              element={<ManageDeadline />}
            />

            <Route
              path="/Dashboard/ManageSynopsisSchedule"
              element={<ManageSynopsisSchedule />}
            />
            <Route
              path="/Dashboard/CreateSynopsisSchedule"
              element={<CreateSynopsisSchedule />}
            />
            <Route
              path="/Dashboard/GenerateSynopsisReport"
              element={<GenerateSynopsisReport />}
            />
            <Route
              path="/Dashboard/ViewSynopsisReport"
              element={<ViewSynopsisReport />}
            />
            <Route
              path="/Dashboard/SendSynopsisReport"
              element={<SendSynopsisReport />}
            />
            <Route
              path="/Dashboard/ManageThesisSchedule"
              element={<ManageThesisSchedule />}
            />
            <Route
              path="/Dashboard/CreateThesisSchedule"
              element={<CreateThesisSchedule />}
            />
            <Route
              path="/Dashboard/GenerateThesisReport"
              element={<GenerateThesisReport />}
            />
            <Route
              path="/Dashboard/ViewThesisReport"
              element={<ViewThesisReport />}
            />
            <Route
              path="/Dashboard/SendThesisReport"
              element={<SendThesisReport />}
            />

            <Route
              path="/Dashboard/ManageProgressReport"
              element={<ManageProgressReport />}
            />

            <Route
              path="/Dashboard/AddProgressReport"
              element={<AddProgressReport />}
            />
            <Route
              path="/Dashboard/ManageCommittee"
              element={<AddSupervisoryCommitteeStudent />}
            />
            <Route
              path="/Dashboard/ManageSupervisoryCommittee"
              element={<ManageSupervisoryCommittee />}
            />
            <Route
              path="/Dashboard/AddSupervisoryCommittee"
              element={<AddSupervisoryCommittee />}
            />
            <Route
              path="/Dashboard/VerifyData"
              element={<VerifyStudentData/>}
            />
            <Route
              path="/Dashboard/EvaluateSynopsis(MS)"
              element={<EvaluateSynopsisMS />}
            />
            <Route
              path="/Dashboard/EvaluateSynopsis(PhD)"
              element={<EvaluateSynopsisPhD />}
            />
            <Route
              path="/Dashboard/PendingThesis"
              element={<PendingThesis />}
            />
            <Route
              path="/Dashboard/EvaluateThesis(MS)"
              element={<EvaluateThesisMS />}
            />
            <Route
              path="/Dashboard/EvaluateThesis(PhD)"
              element={<EvaluateThesisPhD />}
            />
            <Route
              path="/Dashboard/ManageNotification"
              element={<ManageNotification />}
            />
            <Route
              path="/Dashboard/ManageStudentNotification"
              element={<ManageStudentNotification />}
            />
            <Route
              path="/Dashboard/SendNotification(PhD)"
              element={<SendNotificationPhD />}
            />
            <Route
              path="/Dashboard/SendNotification(MS)"
              element={<SendNotificationMS />}
            />
            <Route
              path="/Dashboard/autoSendNotification(MS)"
              element={<SendNotificationMSdefault />}
            />
            <Route
              path="/Dashboard/SendNotification"
              element={<SendNotificationStudentDefault />}
            />
            <Route
              path="/Dashboard/autoSendNotification(PhD)"
              element={<SendNotificationPhDdefault />}
            />
            <Route
              path="/Dashboard/SendNotificationtoAll"
              element={<SendNotificationAll />}
            />
            <Route
              path="/Dashboard/SendAnnouncement"
              element={<SendAnnouncement />}
            />
            <Route
              path="/Dashboard/ViewMSStudentDetails"
              element={<ViewMSStudentDetail />}
            />
            <Route
              path="/Dashboard/ViewPhDStudentDetails"
              element={<ViewPhDStudentDetail />}
            />

<Route
              path="/Dashboard/ViewMSStudent"
              element={<ViewMSStudent />}
            />
            <Route
              path="/Dashboard/ViewPhDStudent"
              element={<ViewPhDStudent />}
            />
            <Route
              path="/Dashboard/Supervisor'sReport"
              element={<SupervisorReports />}
            />
            <Route
              path="/Dashboard/ProgramWiseReport"
              element={<ProgramWiseReports />}
            />
            <Route
              path="/Dashboard/summary-report"
              element={<SynopsisWiseReports />}
            />
            <Route
              path="/Dashboard/SessionWiseReport"
              element={<SessionWiseReports />}
            />
            <Route
              path="/Dashboard/Thesis-WiseReport"
              element={<ThesisWiseReports />}
            />
            <Route
              path="/Dashboard/ProcessedReports"
              element={<ProcessedReports />}
            />
            <Route
              path="/Dashboard/InprocessReports"
              element={<InprocessReports />}
            />
            <Route
              path="/Dashboard/ChangePassword"
              element={<ChangePassword />}
            />
            <Route
              path="/Dashboard/SupervisorWiseReport"
              element={<SuperivorWiseReports />}
            />

            <Route
              path="/Dashboard/SynopsisSubmission"
              element={<SynopsisSubmission />}
            />
            <Route
              path="/Dashboard/ThesisSubmission"
              element={<ThesisSubmission />}
            />
            <Route
              path="/Dashboard/ViewAnnouncement"
              element={<ViewAnnouncement />}
            />
            <Route
              path="/Dashboard/ViewNotification"
              element={<ViewNotification />}
            />
            <Route path="/Dashboard/EditProfile" element={<EditProfile />} />
          </Route>
        </>
        
      ) : (
        <Route
          path="/*"
          element={
            <StatusCodes errorCode={"401"} message={"Unauthorized Access"} />
          }
        />
      )}
      <Route
        path="/*"
        element={
          <StatusCodes errorCode={"404"} message={"Page doesnot exist"} />
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
