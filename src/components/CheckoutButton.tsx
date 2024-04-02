import { useAuth0 } from "@auth0/auth0-react"
import { useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import LoadingButton from "./LoadingButton"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { UserFormData, UserProfileForm } from "@/forms/user-profile-form/UserProfileForm"
import { useGetMyUser } from "@/api/MyUserApi"

type Props = {
    onCheckout: (userFormData: UserFormData) => void;
    disabled: boolean;
}


export default function CheckoutButton({ onCheckout, disabled}: Props) {
    const { isAuthenticated, isLoading: isAuthLoading, loginWithRedirect } = useAuth0()

    const { pathname } = useLocation()

    const { currentUser, isLoading: isGetUserLoading } = useGetMyUser()

    const onLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: pathname,
            }
        })
    }

    if (!isAuthenticated) {
        return (
        <Button className="bg-orange-500 flex-1" onClick={onLogin}>
            Log in to check out
        </Button>
        )
    }

    if (isAuthLoading || !currentUser) {
        return <LoadingButton />
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex-1 bg-orange-500" disabled={disabled}>
                    Go to checkout
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[452px] md:min-w-[700px] bg-gray-50">
                <UserProfileForm 
                    currentUser={currentUser} 
                    onSave={onCheckout} 
                    isLoading={isGetUserLoading}
                    title="Confirm Delivery Details"
                    buttonText="Continue to payment" 
                />
            </DialogContent>
        </Dialog>
    )
}
