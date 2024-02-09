"use client";

import SignInForm from "@/components/sign-in/sign-in-page";
import store from "@/store";
import { Provider } from "react-redux";

export default function SignUpPage() {
    return(
        <Provider store={store}>

        <SignInForm />
        </Provider>
    )
}