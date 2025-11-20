import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
import Adduser from "./Adduser";
import Updateuser from "./Updateuser";
import Deleteuser from "./Deleteuser";
import { MdModeEdit, MdDelete } from "react-icons/md";

const Table = () => {
  const [data, setData] = useState([]);
  const [openmodal, setOpenmodal] = useState(false);
  const [selectuser, setSelectUser] = useState(null);
  const [openUpdateModel, setOpenUpdateModel] = useState(false);
  const [openDeleteModel, setopenDeleteModel] = useState(false);

  const fetchData = async () => {
    try {
      const getData = await axios.get(`http://127.0.0.1:8085/api/get`);
      setData(getData.data.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  // fetching backend data
  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (user) => {
    setSelectUser(user);
    setOpenUpdateModel(true);
  };
  const handleDelete = (user) => {
    setSelectUser(user);
    setopenDeleteModel(true);
  };
  return (
    <div>
      <h1>Employee Table</h1>
      <table>
        <thead>
          <tr>
            <th>SR.No</th>
            <th>Name</th>
            <th>Fathername</th>
            <th>Email</th>
            <th>Phone</th>
            <th>
              <button className="pluse-btn" onClick={() => setOpenmodal(true)}>
                +
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => (
            <tr key={ele.id || index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.fathername}</td>
              <td>{ele.email}</td>
              <td>{ele.phone}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(ele)}>
                  <MdModeEdit />
                </button>
                <button className="delete" onClick={() => handleDelete(ele)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openmodal && (
        <Adduser
          closeModal={() => setOpenmodal(false)}
          refreshTable={fetchData}
        ></Adduser>
      )}

      {openUpdateModel && (
        <Updateuser
          user={selectuser}
          closeModal={() => setOpenUpdateModel(false)}
          refreshTable={fetchData}
        ></Updateuser>
      )}
      {openDeleteModel && (
        <Deleteuser
          user={selectuser}
          closeModal={() => setopenDeleteModel(false)}
          refreshTable={fetchData}
        ></Deleteuser>
      )}
    </div>
  );
};

export default Table;
