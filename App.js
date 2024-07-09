import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Department from './Component/Department';
import StudentForm from './Component/StudentForm';

import TeacherForm from './Component/TeacherForm';
import TeacherList from './Component/TeacherList';
import Mainpage from './Component/Mainpage';
import Login from './Component/Login';
import UpdationForm from './Component/Updation';
import UpdationList from './Component/UpdationList';
import Campus from './Component/Campus';
import Events from './Component/Events';
import Indoorgames from './Component/Indoorgames';
import AboutUs from './Component/AboutUs';
import TermsAndConditions from './Component/TermsAndConditions';
import CopyrightPage from './Component/CopyrightPage';
import Tution from './Component/Tution';
import AccountCreation from './Component/AccountCreation';
import { database } from './firebase';
import PasswordReset from './Component/PasswordReset';  

import { ref, onValue, update, push, remove } from 'firebase/database';
import PrivacyPolicy from './Component/PrivacyPolicy';

function App() {
  const [studentObjects, setStudentObjects] = useState({});
  const [teacherObjects, setTeacherObjects] = useState({});
  const [updationObjects, setUpdationObjects] = useState({});
  const [currentStudentId, setCurrentStudentId] = useState('');
  const [currentTeacherId, setCurrentTeacherId] = useState('');
  const [currentUpdationId, setCurrentUpdationId] = useState('');

  useEffect(() => {
    const studentRef = ref(database, 'students');
    onValue(studentRef, (snapshot) => {
      if (snapshot.exists()) {
        setStudentObjects(snapshot.val());
      } else {
        setStudentObjects({});
      }
    });
  }, []);

  useEffect(() => {
    const teacherRef = ref(database, 'teachers');
    onValue(teacherRef, (snapshot) => {
      if (snapshot.exists()) {
        setTeacherObjects(snapshot.val());
      } else {
        setTeacherObjects({});
      }
    });
  }, []);

  useEffect(() => {
    const updationRef = ref(database, 'updation');
    onValue(updationRef, (snapshot) => {
      if (snapshot.exists()) {
        setUpdationObjects(snapshot.val());
      } else {
        setUpdationObjects({});
      }
    });
  }, []);

  const addOrEditStudent = (obj) => {
    if (currentStudentId === '') {
      const newStudentRef = push(ref(database, 'students'));
      update(newStudentRef, obj)
        .then(() => {
          console.log('Student data added');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const studentRef = ref(database, `students/${currentStudentId}`);
      update(studentRef, obj)
        .then(() => {
          console.log('Student data updated');
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setCurrentStudentId('');
  };

  const onEditStudent = (id) => {
    setCurrentStudentId(id);
  };

  const onDeleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      remove(ref(database, `students/${id}`))
        .then(() => {
          console.log('Student data deleted');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const addOrEditTeacher = (obj) => {
    if (currentTeacherId === '') {
      const newTeacherRef = push(ref(database, 'teachers'));
      update(newTeacherRef, obj)
        .then(() => {
          console.log('Teacher data added');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const teacherRef = ref(database, `teachers/${currentTeacherId}`);
      update(teacherRef, obj)
        .then(() => {
          console.log('Teacher data updated');
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setCurrentTeacherId('');
  };

  const onEditTeacher = (id) => {
    setCurrentTeacherId(id);
  };

  const onDeleteTeacher = (id) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      remove(ref(database, `teachers/${id}`))
        .then(() => {
          console.log('Teacher data deleted');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const addOrEditUpdation = (obj) => {
    if (currentUpdationId === '') {
      const newUpdationRef = push(ref(database, 'updation'));
      update(newUpdationRef, obj)
        .then(() => {
          console.log('Updation data added');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const updationRef = ref(database, `updation/${currentUpdationId}`);
      update(updationRef, obj)
        .then(() => {
          console.log('Updation data updated');
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setCurrentUpdationId('');
  };

  const onEditUpdation = (id) => {
    setCurrentUpdationId(id);
  };

  const onDeleteUpdation = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      remove(ref(database, `updation/${id}`))
        .then(() => {
          console.log('Record deleted');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/Department' element={<Department />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Campus' element={<Campus />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Indoorgames' element={<Indoorgames />} />
          <Route path='/Navbar' element={<Navbar />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='/CopyrightPage' element={<CopyrightPage />} />
          <Route path='/Tution' element={<Tution />} />
          <Route path='/AccountCreation' element={<AccountCreation />} />
          <Route path='/PasswordReset' element={<PasswordReset />} />
          
          <Route
            path='/Updation'
            element={
              <UpdationForm
                addOrEditUpdation={addOrEditUpdation}
                currentId={currentUpdationId}
                updationObjects={updationObjects}
              />
            }
          />
          <Route
            path='/UpdationList'
            element={
              <UpdationList
                updationObjects={updationObjects}
                onEdit={onEditUpdation}
                onDelete={onDeleteUpdation}
              />
            }
          />
          <Route
            path='/StudentForm'
            element={
              <StudentForm
                addOrEditStudent={addOrEditStudent}
                currentId={currentStudentId}
                studentObjects={studentObjects}
                onEditStudent={onEditStudent}
                onDeleteStudent={onDeleteStudent}
              />
            }
          />
          <Route
  path='/TeacherForm'
  element={
    <TeacherForm
      addOrEditTeacher={addOrEditTeacher}
      currentId={currentTeacherId}
      teacherObjects={teacherObjects}
      onEditTeacher={onEditTeacher}  
      onDeleteTeacher={onDeleteTeacher}  
    />
  }
/>

          <Route
            path='/TeacherList'
            element={
              <TeacherList
                teacherObjects={teacherObjects}
                onEdit={onEditTeacher}
                onDelete={onDeleteTeacher}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
