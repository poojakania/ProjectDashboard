// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Nav from './Nav';
// import Calendar from 'react-calendar';
// import './Sidebar.css';

// function DashboardPage() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleUpperCalendarChange = (date) => {
//     setSelectedDate(date);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <div className="container-fluid bg-light min-vh-100">
//       <div className="row">
//         <div className='col-2'>
//           <Sidebar />
//         </div>
//         <div className='col px-3'>
//           <Nav />
//           <div className='container-fluid px-5'>
//             <div className='row g-3 my-4'>
//               <div className='col-md-3'>
//                 <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
//                   <div>
//                     <h3 className='fs-5'>102</h3>
//                     <p className='fs-5'>total tasks</p>
//                   </div>
//                   <i className='bi bi-cart-plus p-3 fs-1'></i>
//                 </div>
//               </div>
//               <div className='col-md-3'>
//                 <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
//                   <div>
//                     <h3 className='fs-5'>102</h3>
//                     <p className='fs-5'>total tasks</p>
//                   </div>
//                   <i className='bi bi-cart-plus p-3 fs-1'></i>
//                 </div>
//               </div>
//               <div className='col-md-3'>
//                 <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
//                   <div>
//                     <h3 className='fs-5'>102</h3>
//                     <p className='fs-5'>total tasks</p>
//                   </div>
//                   <i className='bi bi-cart-plus p-3 fs-1'></i>
//                 </div>
//               </div>
//               <div className='col-md-3'>
//                 <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
//                   <div>
//                     <h3 className='fs-5'>102</h3>
//                     <p className='fs-5'>total tasks</p>
//                   </div>
//                   <i className='bi bi-cart-plus p-3 fs-1'></i>
//                 </div>
//               </div>
//             </div>
//           </div>

// <div className='container-fluid px-5'>
//   <div className='row g-3 my-4'>
//     <div className='col-md-8'>
//       <div className='row g-1 my-4'>
//         <div className='col'>
//           <div className='p-1 bg-white shadow-sm d-flex justify-content-between align-items-center'>
//             <h2 className="text-lg font-semibold text-[#1E293B]">Latest Activity</h2>
//             <button onClick={toggleModal} className="btn btn-primary">Add a Schedule</button>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between items-center bg-[#E0F2FE] p-4 rounded-md">
//         <div>
//           <p className="text-sm font-semibold">10:00 - 11:00 AM</p>
//           <p className="text-xs">Bamfer Consulting Inc Project Estimation Meeting</p>
//         </div>
//       </div>
//     </div>
//     <div className='col-md-4'>
//       <div className="bg-white p-5 mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Make An Appointment</h2>
//         </div>
//         <Calendar
//           className="rounded-md border mb-4"
//           mode="single"
//           onChange={handleUpperCalendarChange}
//           value={selectedDate}
//         />
//       </div>
//       <div className="bg-white p-5">
//         <h2 className="text-xl font-semibold mb-4">Calendar</h2>
//         <Calendar
//           className="rounded-md border"
//           mode="single"
//           value={selectedDate}
//           onChange={handleUpperCalendarChange}
//         />
//       </div>
//     </div>
//   </div>
// </div>


// <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title">Schedule Activity</h5>
//         <button type="button" className="close" onClick={toggleModal} aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="modal-body">
//         <div className="form-group">
//           <label htmlFor="time">Time:</label>
//           <input type="text" id="time" className="form-control" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="distribution">Distribution:</label>
//           <input type="text" id="distribution" className="form-control" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" className="form-control" />
//         </div>
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-primary">Save</button>
//         <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
//       </div>
//     </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from 'react-calendar';
import { Badge, Button, Card } from '@mui/material';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { Add } from '@mui/icons-material'; // Importing icons from @mui/icons-material package
// import { Select } from '@mui/material';

// Use Select component in your code



import './Sidebar.css';


function DashboardPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = React.useState('');
  const [toggle, setToggle] = useState(true)
  const totalTasks = 102; // Example total tasks
  const completedTasks = 44; // Example completed tasks



  const Toggle=() => {
    setToggle(!toggle)
  }

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUpperCalendarChange = (date) => {
    setSelectedDate(date);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const pendingTasks = totalTasks - completedTasks;
  const progressBarValue = totalTasks !== 0 ? (completedTasks / totalTasks) * 100 : 0;

 
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        {toggle && <div className='col-4 col-md-2 position-fixed'>
          <Sidebar />
        </div>}
        {toggle && <div className='col-4 col-md-2  '></div>}
        <div className='col position-relative'>
          <Nav Toggle={Toggle}/>
         
          <div className='container-fluid '>
          <h2>Dashborad</h2>
    <div className='row  my-4'>
      
        <div className="col-md-3" style={{ fontSize: "14px" }}>
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center-rounded">
                <i className="bi bi-cart-plus p-3 fs-1"></i>
                <div>
                    <p className="fs-7">Total Tasks</p>
                    <h3 className="fs-7">102</h3>
                    <p className="fs-7" style={{ color: "#0056b3" }}>Completed:44</p>
                    </div>
                         
                    </div>
                    <div className="p-3 bg-white d-flex flex-column align-items-start">
                    <div className="pending-tasks d-flex justify-content-between">
    <p style={{ margin: "0" }}>{pendingTasks} Pending</p>
    <p style={{ margin: "0 0 0 70px" }}>{`${progressBarValue.toFixed(2)}%`}</p>
</div>



                        <div className="progress w-100">
                            <div 
                                className="progress-bar" 
                                role="progressbar"
                                style={{ width: `${progressBarValue}%`, backgroundColor:'#184CA2' }}
                                aria-valuenow={progressBarValue}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                             
                    </div>
                   
                </div>
            </div>
        </div>
    
              <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
                  <div>
                    <h3 className='fs-5'>102</h3>
                    <p className='fs-5'>total tasks</p>
                  </div>
                  <i className='bi bi-cart-plus p-3 fs-1'></i>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
                  <div>
                    <h3 className='fs-5'>102</h3>
                    <p className='fs-5'>total tasks</p>
                  </div>
                  <i className='bi bi-cart-plus p-3 fs-1'></i>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
                  <div>
                    <h3 className='fs-5'>102</h3>
                    <p className='fs-5'>total tasks</p>
                  </div>
                  <i className='bi bi-cart-plus p-3 fs-1'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid ' >
            <div className='row  ' >
              <div className='col-md-8'>
                <div className='row g-1'>
                  <div className='col p-3 bg-white shadow-sm' style={{fontWeight:'normal', fontSize:'13px'}}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h2 className="text-lg ">Latest Activity</h2>
                      <button onClick={toggleModal} variant="outlined">Add a Schedule</button>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <div className="badge-container me-4">
                        <div className="badge-circle bg-secondary"></div>
                        <Badge variant="secondary" className="ms-1">2 Meetings</Badge>
                      </div>
                      <div className="badge-container me-4">
                        <div className="badge-circle bg-primary"></div>
                        <Badge className="ms-1">2 Discussion</Badge>
                      </div>
                      <div className="badge-container me-4">
                        <div className="badge-circle bg-info"></div>
                        <Badge className="ms-1">1 Reviews</Badge>
                      </div>
                    </div>
                    <br />
                    <div className="space-y-4" style={{ fontWeight: 'normal', fontSize: '13px' }}>
  <div className="bg-white p-2 rounded-md shadow" style={{ borderLeft: '4px solid #184CA2' , backgroundColor:'#F3F7F9'}}> {/* Added borderLeft */}
    <div className="flex justify-between items-center p-2">
      <div>
        <div className="flex items-center">
          <p className="text-xs font-medium m-0">10:00 - 11:00 AM
      
<span className="ml-2 p-1" style={{backgroundColor:'#184CA2', color:'white', borderRadius:'20px'}}><i className="bi bi-bell-fill  rounded-circle"></i></span>

 </p>
         
        </div>
        <div class='d-flex justify-content-between align-items-center'>
          <p className="text-xs text-gray-600 m-0">Bamfer Consulting llc Project Estimation Meeting</p>
          <Button variant="outlined" className="text-xs p-0">View Details</Button>
        </div>
        <p className="text-xxs text-gray-500 m-0">Lead by <span style={{ color: "#184CA2" }} className="text-xs">John Doe</span></p>
      </div>
    </div>
  </div>
</div>
<br/>

                    <div className="space-y-4" style={{fontWeight:'normal', fontSize:'13px'}}>
                      <div className=" p-2 rounded-md shadow" style={{ borderLeft: '4px solid #1FB1E6', backgroundColor:'#F3F7F9' }}>
                        <div className="flex justify-between items-center p-2">
                          <div>
                            <div className="flex items-center">
                              <p className="text-xs font-medium m-0">10:00 - 11:00 AM  
                                    
<span className="ml-2 p-1" style={{backgroundColor:'#ccc', color:'#1FB1E6', borderRadius:'20px'}}><i className="bi bi-bell-fill  rounded-circle"></i></span>
</p>
                            </div>
                            <div class='d-flex justify-content-between align-items-center'>
                              <p className="text-xs text-gray-600 m-0">Bamfer Consulting llc Project Estimation Meeting</p>
                              <Button variant="outlined" className="text-xs p-0">View Details</Button>
                            </div>
                            <p className="text-xxs text-gray-500 m-0">Lead by <span style={{ color: "#1FB1E6" }} className="text-xs">John Doe</span></p>
                          </div>

                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="space-y-4" style={{fontWeight:'normal', fontSize:'13px'}}>
                      <div className="bg-white p-2 rounded-md shadow" style={{ borderLeft: '4px solid #06B48A', backgroundColor:'#F3F7F9'}}>
                        <div className="flex justify-between items-center p-2">
                          <div>
                            <div className="flex items-center">
                              <p className="text-xs font-medium m-0">10:00 - 11:00 AM                                   
<span className="ml-2 p-1" style={{backgroundColor:'#ccc', color:' #06B48A', borderRadius:'20px'}}><i className="bi bi-bell-fill  rounded-circle p-6"></i></span>
</p>
                            </div>
                            <div class='d-flex justify-content-between align-items-center'>
                              <p className="text-xs text-gray-600 m-0">Bamfer Consulting llc Project Estimation Meeting</p>
                              <Button variant="outlined" className="text-xs p-0">View Details</Button>
                            </div>
                            <p className="text-xxs text-gray-500 m-0">Lead by <span style={{ color: "#06B48A" }} className="text-xs">John Doe</span></p>
                          </div>

                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="space-y-4" style={{fontWeight:'normal', fontSize:'13px'}}>
                      <div className="bg-white p-2 rounded-md shadow" style={{ borderLeft: '4px solid #184CA2', backgroundColor:'#F3F7F9' }}>
                        <div className="flex justify-between items-center p-2">
                          <div>
                            <div className="flex items-center">
                              <p className="text-xs font-medium m-0">10:00 - 11:00 AM                                   
<span className="ml-2 p-1" style={{backgroundColor:'#ccc', color:' #184CA2', borderRadius:'20px'}}><i className="bi bi-bell-fill  rounded-circle p-6"></i></span>
</p>
                            </div>
                            <div class='d-flex justify-content-between align-items-center'>
                              <p className="text-xs text-gray-600 m-0">Bamfer Consulting llc Project Estimation Meeting</p>
                              <Button variant="outlined" className="text-xs p-0">View Details</Button>
                            </div>
                            <p className="text-xxs text-gray-500 m-0">Lead by <span style={{ color: "#184CA2" }} className="text-xs">John Doe</span></p>
                          </div>

                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="space-y-4" style={{fontWeight:'normal', fontSize:'13px'}}>
                      <div className="bg-white p-2 rounded-md shadow" style={{ borderLeft: '4px solid #06B48A', backgroundColor:'#F3F7F9' }}>
                        <div className="flex justify-between items-center p-2">
                          <div>
                            <div className="flex items-center">
                              <p className="text-xs font-medium m-0">10:00 - 11:00 AM                                   
<span className="ml-2 p-1" style={{backgroundColor:'#ccc', color:'#06B48A', borderRadius:'20px'}}><i className="bi bi-bell-fill  rounded-circle p-6"></i></span>
</p>
                            </div>
                            <div class='d-flex justify-content-between align-items-center'>
                              <p className="text-xs text-gray-600 m-0">Bamfer Consulting llc Project Estimation Meeting</p>
                              <Button variant="outlined" className="text-xs p-0">View Details</Button>
                            </div>
                            <p className="text-xxs text-gray-500 m-0">Lead by <span style={{ color: "#06B48A" }} className="text-xs">John Doe</span></p>
                          </div>

                        </div>
                      </div>
                    </div>





                  </div>
                </div>
              </div>

              <div className='col-md-4' style={{fontWeight:'normal', fontSize:'10px'}}>
                <div className="bg-white  p-2 mb-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-sm" style={{fontSize:'24px'}}>Make An Appointment</h2>
                  </div>
                  <Calendar
                    className="rounded-md border mb-8"
                    mode="single"
                    onChange={handleUpperCalendarChange}
                    value={selectedDate}
                  />
                </div>
                {/* <div className="bg-white p-2">
                  <h2 className="text-xl font-semibold mb-4">Calendar</h2>
                  <Calendar
                    className="rounded-md border"
                    mode="single"
                    value={selectedDate}
                    onChange={handleUpperCalendarChange}
                  />
                </div> */}
              </div>
            </div>
          </div>


          <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Schedule Activity</h5>
                  <button type="button" className="close" onClick={toggleModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input type="text" id="time" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="distribution">Distribution:</label>
                    <input type="text" id="distribution" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" className="form-control" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">Save</button>
                  <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='container-fluid '>

            <div className='col'>
              <div className='row g-2'>
                <div className='col bg-white shadow-sm p-3'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h2 className="text-lg">Tasks</h2>
                    <div className="d-flex">
                      <Button onClick={toggleModal} variant="outlined" className="me-2" style={{ border: '2px solid #184CA2', color: '#184CA2' }}>+ Add Appointment</Button>
                      <Button variant="outlined" className="text-xs" style={{ backgroundColor: ' #184CA2', color: 'white' }} >See All</Button>
                    </div>
                  </div>
                  <br />
                  <br />
                  <table class="table"  >
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Assign To</th>
                        <th scope="col">Date</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"> <div class="">
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>20/12/2023</td>
                        <td><button type="button" class="btn btn-outline-success">Completed</button></td>
                        <td>
                          <a href="#" title="View" class="btn btn-sm"><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-eye"></i> </span></a>
                          <span class="mx-1"></span>
                          <a href="#" title="Edit" class="btn btn-sm "><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-pencil"></i></span> </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"> <div>
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div></th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>20/12/2023</td>
                        <td><button type="button" class="btn btn-outline-danger">Cancel</button></td>
                        <td>
                          <a href="#" title="View" class="btn btn-sm"><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-eye"></i> </span></a>
                          <span class="mx-1"></span>
                          <a href="#" title="Edit" class="btn btn-sm "><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-pencil"></i></span> </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"> <div >
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div></th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>20/12/2023</td>
                        <td><button type="button" class="btn btn-outline-success">Completed</button></td>
                        <td>
                          <a href="#" title="View" class="btn btn-sm"><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-eye"></i> </span></a>
                          <span class="mx-1"></span>
                          <a href="#" title="Edit" class="btn btn-sm "><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-pencil"></i></span> </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row"> <div>
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div></th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>20/12/2023</td>
                        <td><button type="button" class="btn btn-outline-success">Completed</button></td>
                        <td>
                          <a href="#" title="View" class="btn btn-sm"><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-eye"></i> </span></a>
                          <span class="mx-1"></span>
                          <a href="#" title="Edit" class="btn btn-sm "><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-pencil"></i></span> </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"> <div>
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div></th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>20/12/2023</td>
                        <td><button type="button" class="btn btn-outline-warning">Pending</button></td>
                        <td>
                          <a href="#" title="View" class="btn btn-sm"><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-eye"></i> </span></a>
                          <span class="mx-1"></span>
                          <a href="#" title="Edit" class="btn btn-sm "><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-pencil"></i></span> </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"> <div>
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div></th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>20/12/2023</td>
                        <td><button type="button" class="btn btn-outline-danger">Cancel</button></td>
                        <td>
                          <a href="#" title="View" class="btn btn-sm"><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-eye"></i> </span></a>
                          <span class="mx-1"></span>
                          <a href="#" title="Edit" class="btn btn-sm "><span style={{ color: '#184CA2', fontSize: '20px' }}><i class="bi bi-pencil"></i></span> </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
          <br/>
          <div className='container-fluid '>
            <div className='row '>
              <div className='col-md-6'>
                <div className='row g-1'>
                <div className='col p-3 bg-white shadow-sm'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className="text-lg ">Bills</h2>
        <Button variant="outlined" className="text-xs" style={{ border: '1px solid #184CA2', color:'#184CA2' }} >View All</Button>
  </div>
  <br/>
  <table class="table" >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Recipient Name</th>
      <th scope="col">Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>02/12/2023</td>
      <td>$10,000</td>
      <td><button type="button" class="btn btn-outline-success">Success</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>02/12/2023</td>
      <td>$10,000</td>
      <td><button type="button" class="btn btn-outline-success">Success</button></td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>02/12/2023</td>
      <td>$10,000</td>
      <td><button type="button" class="btn btn-outline-warning">Delay</button></td>

    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Jacob</td>
      <td>02/12/2023</td>
      <td>$10,000</td>
      <td><button type="button" class="btn btn-outline-success">Success</button></td>

    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Jacob</td>
      <td>02/12/2023</td>
      <td>$10,000</td>
      <td><button type="button" class="btn btn-outline-success">Success</button></td>

    </tr>
  </tbody>
</table>
  </div>
  
  </div>
  
  </div>
  <div className='col-md-6'>
                <div className='row g-1'>
                <div className='col p-3 bg-white shadow-sm'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className="text-lg ">History</h2>
        <Button variant="outlined" className="text-xs" style={{ border: '1px solid #184CA2', color:'#184CA2' }} >View All</Button>
  </div>
  <br/>
  <table class="table" style={{fontWeight:'normal', fontSize:'12px'}}>
  <thead>
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Last Login</th>
      <th scope="col">IP Address</th>
      <th scope="col">Browser</th>
      <th scope="col">Successfull</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">bamfer@gmail.com</th>
      <td>29/12/2023 11:53 AM</td>
      <td>194.44.234.160</td>
      <td>
      <i class="bi bi-browser-chrome"  style={{fontSize: '14px', color: '#FF8C00'}}></i>
      <span class="mx-1"></span>
      <i class="bi bi-browser-firefox" style={{fontSize: '14px', color: '#FF8C00'}}></i>   
    </td>
    <td>
    <i class="bi bi-check text-success" style={{fontSize: '24px'}}></i> 
  </td>
    </tr>
    <tr>
      <th scope="row">bamfer@gmail.com</th>
      <td>29/12/2023 11:53 AM</td>
      <td>194.44.234.160</td>
      <td>
      <i class="bi bi-browser-chrome"  style={{fontSize: '14px', color: '#FF8C00'}}></i>
      
      <span class="mx-1"></span>
     
    </td>
    <td>
    <i class="bi bi-check text-success" style={{fontSize: '26px'}}></i> 
  </td>
    </tr>
    <tr>
      <th scope="row">bamfer@gmail.com</th>
      <td>29/12/2023 11:53 AM</td>
      <td>194.44.234.160</td>
      <td>
      <i class="bi bi-browser-firefox"  style={{fontSize: '14px', color: '#FF8C00'}}></i>
      <span class="mx-1"></span>
      
    </td>
    <td>
    <i class="bi bi-check text-success" style={{fontSize: '26px'}}></i> 
  </td>
    </tr>
    <tr>
      <th scope="row">bamfer@gmail.com</th>
      <td>29/12/2023 11:53 AM</td>
      <td>194.44.234.160</td>
      <td>
      <i class="bi bi-browser-chrome"  style={{fontSize: '14px', color: '#FF8C00'}}></i>
     
    </td>
    <td>
    <i class="bi bi-check text-success" style={{fontSize: '26px'}}></i> 
  </td>
    </tr>
    <tr>
      <th scope="row">bamfer@gmail.com</th>
      <td>29/12/2023 11:53 AM</td>
      <td>194.44.234.160</td>
      <td>
      <i class="bi bi-browser-chrome"  style={{fontSize: '14px', color: '#FF8C00'}}></i>
      <span class="mx-1"></span>
      <i class="bi bi-browser-firefox" style={{fontSize: '14px', color: '#FF8C00'}}></i>   
    </td>
    <td>
    <i class="bi bi-check text-success" style={{fontSize: '26px'}}></i> 
  </td>
    </tr>
  </tbody>
</table>
  </div>
  </div>
  </div>
  </div>
  </div>
          {/* <div className="flex h-screen bg-gray-100 p-5">
            <div className="flex flex-col w-3/5 space-y-6">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">2 Meetings</Badge>
                <Badge>2 Discussion</Badge>
                <Badge>1 Reviews</Badge>
              </div>
              <div className="space-y-4">
                <Card className="flex items-center justify-between bg-white p-4">
                  <div>
                    <div className="text-lg font-semibold">10:00 - 11:00 AM</div>
                    <div className="text-sm text-gray-600">Bamfer Consulting llc Project Estimation Meeting</div>
                    <div className="text-sm">Lead by John Doe</div>
                  </div>
                  <Button variant="outline">View Details</Button>
                </Card>
            
              </div>
            </div>
            <div className="ml-8 w-2/5 space-y-6">
              <Button>Add A Schedule</Button>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Make An Appointment</h2>
                  <FormControl fullWidth>
        <InputLabel id="select-label">Select Option</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedOption}
          onChange={handleChange}
          label="Select Option"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'option1'}>Option 1</MenuItem>
          <MenuItem value={'option2'}>Option 2</MenuItem>
          <MenuItem value={'option3'}>Option 3</MenuItem>
        </Select>
      </FormControl>
                </div>
                <Calendar className="rounded-md border" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Notification</h2>
                <div className="border rounded-md p-4">
                  <p>No new notifications</p>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>

    </div>
  );
}

export default DashboardPage;
