import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import Search from "./Search";
import './App.css';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearch(searchWord);
    let arr = localStorage.getItem("taskList");

    if (arr) {
      var newFilter = JSON.parse(arr).filter((element) => {
        //   To add search based on description too

        return element.Name.toLowerCase().includes(searchWord.toLowerCase()) ||
          element.Description.toLowerCase().includes(searchWord.toLowerCase());

        // for single search based on title
        return element.Name.toLowerCase().includes(searchWord.toLowerCase());
      });
    }

    if (searchWord === "") {
      let arr = localStorage.getItem("taskList");

      if (arr) {
        let obj = JSON.parse(arr);
        setTaskList(obj);
      }
    } else {
      setTaskList(newFilter);
    }
    console.log(newFilter);
  };



  return (
    <>


      <div className="header text-center">
        <h2>Sticky Notes</h2>
        <div className="col">
          <Search handleSearchNote={handleFilter} wordEntered={search} />
        </div>
        <div className="col">
          <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
            Create Task
          </button>
        </div>

      </div>






      <div className="task-container ">

        {taskList &&
          taskList.map((obj, index) => (
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />

          ))}
      </div>


      <CreateTask toggle={toggle} modal={modal} save={saveTask} />

    </>
  );
};

export default TodoList;
