import React, { useState } from 'react';
import { Form, Icon, Input, Button, Checkbox, notification } from "antd";
import { minLengthValidation, emailValidation } from "../../../utils/formValidation";
import { signUpApi } from "../../../api/user";
import "./RegisterForm.scss"
export default function RegisterForm() {

    
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
        repeatPassword:"",
        privacyPolicy:false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    });



    const changeForm = e =>{
        if (e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name]:e.target.checked
            })
        }else{
            setInputs({
                ...inputs,
                [e.target.name]:e.target.value
            })
        }
        //console.log(e.target.value);
    }

    const inputValidation = (e) =>{
       const {type, name} = e.target;
       if(type==="email"){
           setFormValid({
               ...formValid,
               [name]: emailValidation(e.target)
           });

       }
       if (type ==="password"){
           setFormValid({
               ...formValid,
               [name]:minLengthValidation(e.target, 6)
           });
       }
       if(type ==="checkbox"){
           setFormValid({
               ...formValid,
               [name]:e.target.checked
           });
       }
       
    }

    const register = async (e)=>{
        e.preventDefault();
       
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;
        const privacyPolicyVal = inputs.privacyPolicy;

        if(!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal){
            notification['error']({
                message:"Todos los campos son obligatorios"
            })
        }else{
            if(passwordVal !== repeatPasswordVal){
                notification['error']({
                    message: "Las contrase??as tienen que ser iguales."
                })
            }else{

                const result = await signUpApi(inputs);
                
                if(!result.ok){
                    notification['error']({
                         message: result.message
                    })
                }else{
                    notification['success']({
                        message: "El registro ha sido guardado."
                    });
                    resetForm();
                }
                //console.log(result);
                // 
            }
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName('input');

        for (let i=0; i < inputs.length; i++){

            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");

        }
        setInputs({
            email:"",
            password:"",
            repeatPassword:"",
            privacyPolicy:false
        });

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        })
    }

    return (
        <Form className="register-form" onSubmit={register} onChange={changeForm}>
            <Form.Item>
                <Input 
                    prefix={<Icon type="user" style={{color: "rgba(0, 0, 0, 0.25)"}}/>}
                    type="email"
                    name="email"
                    placeholder="Correo Electr??nico"
                    className="register-form__input"
                    value={inputs.email}
                    onChange={inputValidation}
                />
            </Form.Item>
            <Form.Item>
                <Input 
                    prefix={<Icon type="lock" style={{color: "rgba(0, 0, 0, 0.25)"}}/>}
                    type="password"
                    name="password"
                    placeholder="Contrase??a"
                    className="register-form__input"
                    value={inputs.password}
                    onChange={inputValidation}
                />
            </Form.Item>
            <Form.Item>
            <Input 
                    prefix={<Icon type="lock" style={{color: "rgba(0, 0, 0, 0.25)"}}/>}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir Contrase??a"
                    className="register-form__input"
                    value={inputs.repeatPassword}
                    onChange={inputValidation}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy"
                    checked={inputs.privacyPolicy}
                    onChange={inputValidation}
                >
                    He le??do y acepto la politica de Privacidad
                </Checkbox>
            </Form.Item>
            <Form.Item>
               <Button htmlType="submit" className="register-form__button">
                    Crear cuenta
               </Button>
            </Form.Item>
        </Form>
    )
}

