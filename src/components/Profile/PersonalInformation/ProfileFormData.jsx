import {Field, Form, Formik} from "formik";


export const ProfileFormData = ({updateUserPersonalInfo}) => {
    return(
        <div>
            SUCCESS!!!
            <Formik initialValues={{
                aboutMe: '',
                userId: '',
                lookingForAJob: false,
                lookingForAJobDescription: '',
                contacts: {
                    github: '',
                    vk: '',
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    website: '',
                    youtube: '',
                    mainLink: ''
                }

            }} onSubmit={(values)=>{updateUserPersonalInfo(values)
                                                console.log(values)}}>
                {(props)=>(
                    <Form>
                        <div>
                            <Field onChange={props.handleChange} placeholder="aboutMe" name="aboutMe"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="userId" name="userId"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="lookingForAJob" name="lookingForAJob"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="lookingForAJobDescription" name="lookingForAJobDescription"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="fullName" name="fullName"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="github" name="contacts.github"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="vk" name="contacts.vk"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="facebook" name="contacts.facebook"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="instagram" name="contacts.instagram"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="twitter" name="contacts.twitter"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="website" name="contacts.website"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="youtube" name="contacts.youtube"></Field>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} placeholder="mainLink" name="contacts.mainLink"></Field>
                        </div>
                        <button type="submit">SEND</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}