"use client";

import { Provider } from "react-redux";
import SignUpForm from "../../components/sign-up/sign-up-page";
import store from "@/store";

export default function SignUpPage() {

    return(
        <Provider store={store}>
        <SignUpForm />
        </Provider>
    )
}