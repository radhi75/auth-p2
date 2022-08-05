import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "./redux/Action/authAction";
import Usercard from "./Usercard";

const UserProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
  }, []);
  const user = useSelector((state) => state.Authreducer.user);
  const users = useSelector((state) => state.Authreducer.users);
  console.log(users);
  return (
    <div>
      <Card style={{ width: "18rem", margin: "auto", marginTop: "50px" }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text style={{ color: "black" }}>{user?.email}</Card.Text>
        </Card.Body>
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {users?.map((el) => (
          <div key={el._id}>
            <Usercard el={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
