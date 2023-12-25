import React from "react";

export default function Contact(props) {
    return (
        <div class="container" style={{color:(props.mode=='light'?'black':'white')}}>
            <h1 >Contact Us</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >
                    Name
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    style={{color:(props.mode=='light'?'black':'white'), backgroundColor:(props.mode=='light'?'white':'grey')}}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput2"
                    style={{color:(props.mode=='light'?'black':'white'), backgroundColor:(props.mode=='light'?'white':'grey')}}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                    Message(Optional)
                </label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput3"
                    style={{color:(props.mode=='light'?'black':'white'), backgroundColor:(props.mode=='light'?'white':'grey')}}
                />
            </div>
            <div className="submitbtn">
            <input class="btn btn-dark" type="submit" value="Submit"/>
            </div>
        </div>
    );
}
