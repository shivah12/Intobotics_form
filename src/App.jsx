import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "rgba(255, 255, 255, 0.5);",
    border: "10px solid primary.main",
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
};

function App() {
    const [name, setName] = useState("");
    const [branch, setBranch] = useState("");
    const [regno, setRegno] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [year, setYear] = useState("");
    const [open, setOpen] = useState(false);
    const [desc, setDesc] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) => {
            console.log(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    const createUser = async () => {
        const regEx =
            /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!regEx.test(email) && email !== "") {
            alert("Please fill Email field properly");
        } else if (
            !name ||
            !branch ||
            !regno ||
            !email ||
            !phone ||
            !year ||
            !desc
        ) {
            alert("Please Fill In All Required Fields");
        } else {
            await addDoc(usersCollectionRef, {
                Branch: branch,
                Name: name,
                Phoneno: phone,
                Regno: regno,
                Year: year,
                email: email,
                Desc: desc,
            });
            handleOpen();
        }
    };

    return (
        <div className="App">
            <div className="form" data-aos="fade-down">
                <div className="logos">
                    <img src="Vssut Main Logo.png" alt="" id="vssut" />

                    <img
                        src="https://i.imgur.com/twT3QYh.png"
                        alt=""
                        data-aos="fade-right"
                        id="robo"
                    />

                    <img
                        src="rcslogo.png"
                        alt=""
                        data-aos="fade-right"
                        id="rslogo"
                    ></img>
                </div>

                <TextField
                    required
                    className="inputField"
                    sx={{
                        margin: 0.5,
                        color: "white",
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}
                    id="outlined-basic"
                    label="Full Name"
                    color="warning"
                    inputProps={{
                        style: {
                            fontFamily: "Poppins, sans-serif",
                            color: "black",
                        },
                    }}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    variant="outlined"
                    data-aos="fade-up"
                />

                <TextField
                    required
                    className="inputField"
                    sx={{
                        margin: 0.5,
                        color: "white",
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}
                    id="outlined-basic"
                    label="Branch"
                    color="warning"
                    inputProps={{
                        style: {
                            fontFamily: "Poppins, sans-serif",
                            color: "black",
                        },
                    }}
                    onChange={(event) => {
                        setBranch(event.target.value);
                    }}
                    variant="outlined"
                    data-aos="fade-up"
                />

                <TextField
                    required
                    className="input"
                    id="outlined-basic"
                    sx={{ margin: 0.5, color: "white" }}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}
                    label="Registration Number"
                    color="warning"
                    inputProps={{
                        style: {
                            fontFamily: "Poppins, sans-serif",
                            color: "black",
                        },
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                    }}
                    onChange={(event) => {
                        setRegno(event.target.value);
                    }}
                    variant="outlined"
                    data-aos="fade-up"
                />

                <TextField
                    required
                    className="input"
                    id="outlined-basic"
                    sx={{ margin: 0.5, color: "white" }}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}
                    label="Email Id"
                    color="warning"
                    inputProps={{
                        style: {
                            fontFamily: "Poppins, sans-serif",
                            color: "black",
                        },
                        inputMode: "email",
                    }}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    variant="outlined"
                    data-aos="fade-up"
                />

                <TextField
                    required
                    className="input"
                    id="outlined-basic"
                    sx={{ margin: 0.5, color: "white" }}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}
                    label="Phone Number"
                    color="warning"
                    inputProps={{
                        style: {
                            fontFamily: "Poppins, sans-serif",
                            color: "black",
                        },
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                    }}
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }}
                    variant="outlined"
                    data-aos="fade-up"
                />

                <TextField
                    required
                    className="input"
                    id="outlined-basic"
                    sx={{ margin: 0.5, color: "white" }}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}
                    label="Year of Passing"
                    color="warning"
                    inputProps={{
                        style: {
                            fontFamily: "Poppins, sans-serif",
                            color: "black",
                        },
                    }}
                    onChange={(event) => {
                        setYear(event.target.value);
                    }}
                    variant="outlined"
                    data-aos="fade-up"
                />

                <TextField
                    required
                    className="input"
                    id="outlined-basic"
                    sx={{
                        margin: 0.5,
                        color: "white",
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}
                    label="Why are you interested in joining VSSUT Robotics?"
                    color="warning"
                    inputProps={{
                        style: {
                            fontFamily: "Poppins, sans-serif",
                            color: "black",
                        },
                    }}
                    onChange={(event) => {
                        setDesc(event.target.value);
                    }}
                    variant="outlined"
                    data-aos="fade-up"
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={createUser}
                    data-aos="fade-up"
                >
                    Submit
                </Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="p"
                        >
                            You are successfully registered.
                            Kindly submit only once!
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default App;
