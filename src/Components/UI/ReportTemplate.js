import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState,useRef } from "react";
import Template from './DocumentTemplate'
import { left } from "@popperjs/core";
import ReactToPrint from 'react-to-print';

const ReportTemplate = ({ report, reportType }) => {
  const navigate=useNavigate();
  console.log("student",report)
  let componentRef = useRef(null);

  const [syncheck,setsyn]=useState(false)
  const { currentRole } = useSelector((state) => state.userRoles);
  const [open,setOpen]=useState(false)
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Paper
    ref={(el) => componentRef = el}

      variant="outlined"
      elevation={3}
      key={report?.student_id?._id}
      style={{
        display: "grid",
        placeItems: "center",
        // placeContent: "center",
        marginBottom: "2rem",
      }}
    >
    
      <table

        cellSpacing={4}
        cellPadding={6}
        style={{
          color: "#333333",
          borderCollapse: "separate",
          padding: ".5rem",
          /* margin: "1rem", */
          /* border: "2px solid #572E74",
                  borderRadius: "6px", */
        }}
      >
        <colgroup className="cols">
          <col className="col1" />
          <col className="col2" />
          <col className="col3" />
          <col className="col4" />
        </colgroup>
        <tbody>
          <tr>
            <td>
              <img
                src={
                  process.env.REACT_APP_URL +
                    "/" +
                    report?.student_id?.profilePicture || ""
                }
                alt="Student Profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  objectFit: "cover",
                  height: "8rem",
                  width: "8rem",
                  borderRadius: "100%",
                }}
              />
            </td>
          </tr>
          <tr
            style={{
              backgroundColor: "white",
            }}
          >
            <td
              valign="middle"
              style={{
                backgroundColor: "#E9ECF1",
                fontWeight: "bold",
              }}
            >
              Name
            </td>
            <td>{report?.student_id?.username}</td>
            <td
              valign="middle"
              style={{
                backgroundColor: "#E9ECF1",
                fontWeight: "bold",
              }}
            >
              Email
            </td>
            <td>{report?.student_id?.email}</td>
          </tr>
          <tr
            style={{
              backgroundColor: "white",
            }}
          >
            <td
              valign="middle"
              style={{
                backgroundColor: "#E9ECF1",
                fontWeight: "bold",
              }}
            >
              Father Name
            </td>
            <td>{report?.student_id?.fatherName}</td>
            <td
              valign="middle"
              style={{
                backgroundColor: "#E9ECF1",
                fontWeight: "bold",
              }}
            >
              Supervisor
            </td>
            <td>{report?.student_id?.supervisor_id?.username}</td>
          </tr>
          <tr style={{ color: "#333333", backgroundColor: "#F7F6F3" }}>
            <td
              valign="middle"
              style={{
                backgroundColor: "#E9ECF1",
                fontWeight: "bold",
              }}
            >
              Registration No.
            </td>
            <td>{report?.student_id?.registrationNo}</td>
            <td
              valign="middle"
              style={{
                backgroundColor: "#E9ECF1",
                fontWeight: "bold",
              }}
            >
              Mobile No.
            </td>
            <td>{report?.student_id?.mobile}</td>
          </tr>
          <tr
            style={{
              backgroundColor: "white",
            }}
          >
            <td
              valign="middle"
              style={{
                backgroundColor: "#E9ECF1",
                fontWeight: "bold",
              }}
            >
              Registration Date
            </td>
            <td>{report?.student_id?.thesisRegistration}</td>
            <td
              valign="middle"
              style={{
                backgroundColor: "#E9ECF1",
                fontWeight: "bold",
              }}
            >
              Semester
            </td>
            <td>{report?.student_id?.Semester}</td>
          </tr>
          {reportType ? (
            <tr
              style={{
                color: "#333333",
                backgroundColor: "#F7F6F3",
              }}
            >
              <td
                valign="middle"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                }}
              >
                {reportType === "Synopsis" ? (
                  <>Synopsis Status</>
                ) : (
                  <>Thesis Status</>
                )}
              </td>
              <td>
                {reportType === "Synopsis" ? (
                  <> {report?.synopsisStatus}</>
                ) : (
                  <> {report?.thesisStatus}</>
                )}
              </td>
              <td
                valign="middle"
                style={{
                  backgroundColor: "#E9ECF1",
                  fontWeight: "bold",
                }}
              >
                {reportType === "Synopsis" ? (
                  <>Synopsis Title</>
                ) : (
                  <>Thesis Title</>
                )}
              </td>
              <td>
                {reportType === "Synopsis" ? (
                  <> {report?.synopsisTitle}</>
                ) : (    
                  <> {report?.thesisTitle}</>
                )}
              </td>

            </tr>
          ) : (
            <>
              <tr
                style={{
                  color: "#333333",
                  backgroundColor: "#F7F6F3",
                }}
              >
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Synopsis Status
                </td>
                <td>{report.synopsisStatus || " - "}</td>
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Synopsis Title
                </td>
                <td>{report.synopsisTitle || " - "}</td>
              </tr>

              <tr
                style={{
                  color: "#333333",
                  backgroundColor: "#F7F6F3",
                }}
              >
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Thesis Status
                </td>
                <td>{report.thesisStatus || " - "}</td>
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Thesis Title
                </td>
                <td>{report.thesisTitle || " - "}</td>
              </tr>
              <tr
                style={{
                  color: "#333333",
                  backgroundColor: "#F7F6F3",
                }}
              >
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Synopsis Document
                </td>
                <td>
                  <Button style={{backgroundColor:'black'}} onClick={()=>{
                    navigate('/Dashboard/Display',{state:{report:report?.synopsisFile}})
                  }}> View Document</Button>
                  
                  </td>
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Thesis Document
                </td>
                <td>
                  <Button style={{backgroundColor:'black'}} onClick={()=>{
                    navigate('/Dashboard/Display',{state:{report:report?.thesisFile}})
                  }}> View Document</Button>
                  </td>
              </tr>

              <tr
                style={{
                  color: "#333333",
                  backgroundColor: "#F7F6F3",
                }}
              >
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Status
                </td>
                <td>{report?.progressReport?.status || " - "}</td>
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Comments
                </td>
                <td>{report?.progressReport?.comment || " - "}</td>
              </tr>
              <tr
                style={{
                  color: "#333333",
                  backgroundColor: "#F7F6F3",
                }}
              >
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Synopsis Evaluation
                </td>
                <td>{report.SynopsisEvaluation || " - "}</td>
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Thesis Evaluation
                </td>
                <td>{report.ThesisEvaluation || " - "}</td>
              </tr>
              <tr style={{
                  color: "#333333",
                  backgroundColor: "#F7F6F3",
                }}>
<td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Result
                </td>
              </tr>
              </>
              )}
        </tbody>
      </table>
              
              
                <div>
                
        {console.log("gehhi",report.student_id.Result)}
        {(report.student_id.Result).map((item,index)=>(
            <Paper
            variant="outlined"
      elevation={3}
      key={index}
      
      style={{
        display: "grid",
        placeItems: "center",
        // placeContent: "center",
        marginBottom: "2rem",
        borderCollapse:"separate",

                  backgroundColor: "white",
      }}
                
              >
                <table
                cellSpacing={2}
                cellPadding={6}
                style={{
                  color:"#333333",
                  borderCollapse:"separate",
                  padding: ".1rem",
                  /* margin: "1rem", */
                  /* border: "2px solid #572E74",
                          borderRadius: "6px", */
                }}
              >
                <colgroup className="cols">
                  <col className="col1" />
                  <col className="col2" />
                  <col className="col3" />
                  <col className="col4" />
                </colgroup>
                <tbody>
      
                <tr      
                style={{
                  color: "#333333",
                  backgroundColor: "#F7F6F3",
                }}           
>
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#DDD5F3",
                    fontWeight: "bold",
                  }}
                >
                  Semester
                </td>
                <td style={{
                    fontWeight: "bold",
                  }}>{item.semester}</td>
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#DDD5F3",
                    fontWeight: "bold",
                  }}
                >
                  Freeze
                </td>
                {item.Freeze?
                <td style={{
                  fontWeight: "bold",
                }}>Semester Freezed</td>
                :
                <td style={{
                  fontWeight: "bold",
                }}>No</td>
                } 
                </tr>
                <tr style={{ color: 'black',backgroundColor:'black',margin:2}}/>

                {(item.Result).map((it,index)=>(
                  <>
                                    <tr
                style={{
                  color: "#333333",
                  backgroundColor: "#F7F6F3"}}
              >
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Subject
                </td>
                <td>{it.Subject} ({it.Rank})</td>
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Absent
                </td>
                {it.absent?
                <td>Yes</td>:

                <td>No</td>
                
                }
                </tr>
                
                <tr
                style={{
                  color: "#333333",
                  backgroundColor: "#F7F6F3"}}
              >
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  GPA
                </td>
                <td>{it.GPA}</td>
                <td
                  valign="middle"
                  style={{
                    backgroundColor: "#E9ECF1",
                    fontWeight: "bold",
                  }}
                >
                  Instructor
                </td>
                
                <td>{it.Instructor}</td>
                
              
                </tr>
                <tr style={{ color: 'black',backgroundColor:'black',margin:2}}/>
  </>
              ))}
                              
</tbody>
               </table>
                </Paper>

               
                ))}
</div>
<div style={{
                  color: "#333333",
                  backgroundColor: "#E9ECF1",
                    fontSize:16, fontWeight:'bold',padding:7,borderWidth:2,marginRight:"90%"}}>Notifications</div>

<div>
                {!(report?.notifications)?<div>No Notifications</div>:
                (report?.notifications).map((item,index)=>(
                    <Paper
                    variant="outlined"
              elevation={3}
              key={index}
              
              style={{
                display: "grid",
                placeItems: "center",
                // placeContent: "center",
                marginBottom: "2rem",
                borderCollapse:"separate",
        
                          backgroundColor: "white",
              }}
                        
                      >
                        <table
                        cellSpacing={3}
                        cellPadding={6}
                        style={{
                          color:"#333333",
                          borderCollapse:"separate",
                          padding: ".1rem",
                          /* margin: "1rem", */
                          /* border: "2px solid #572E74",
                                  borderRadius: "6px", */
                        }}
                      >
                        <colgroup className="cols">
                          <col className="col1" />
                          <col className="col2" />
                          <col className="col3" />
                          <col className="col4" />
                          <col className="col5" />
                          <col className="col6" />
                        </colgroup>
                        <tbody>
              
                        <tr      
                        style={{
                          color: "#333333",
                          backgroundColor: "#F7F6F3",
                        }}           
        >
                        <td
                          valign="middle"
                          style={{
                            backgroundColor: "#DDD5F3",
                            fontWeight: "bold",
                          }}
                        >
                          Title
                        </td>
                        <td style={{
                            fontWeight: "bold",
                          }}>{item.notificationtitle}</td>
                        <td
                          valign="middle"
                          style={{
                            backgroundColor: "#DDD5F3",
                            fontWeight: "bold",
                          }}
                        >
                          Date
                        </td>
                        <td style={{
                            fontWeight: "bold",
                          }}>{item.creationDate}</td>
<td
                          valign="middle"
                          style={{
                            backgroundColor: "#DDD5F3",
                            fontWeight: "bold",
                          }}
                        >
                         Notification
                        </td>
                        <td style={{
                            fontWeight: "bold",
                          }}>
                            <Button style={{backgroundColor:'black'}} onClick={()=>{
                    navigate('/Dashboard/Display',{state:{report:item.notification}})
                  }}> View Document</Button>
                          </td>

                        </tr>
                        
                        
                        
                        <tr style={{ color: 'black',backgroundColor:'black',margin:2}}/>
          
                      
                      
                                      
        </tbody>
                       </table>
                        </Paper>
        
                       
                        ))
                        }
        </div>
        <div>
        <ReactToPrint
          trigger={() => <Button style={{ marginBottom: "5px", width: 60, marginLeft: '89%', marginTop: 20, backgroundColor: 'darkblue' }} >
            Print
          </Button>}
          content={() => componentRef}
        />


      </div>

    </Paper>
  );
};

export default ReportTemplate;
