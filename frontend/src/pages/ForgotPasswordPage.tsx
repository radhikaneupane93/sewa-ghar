import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from '@/assets/Images/Logo.png'
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";

export interface ForgotPassword {
    email: string;
}

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset } = useForm<ForgotPassword>();
    const email = watch("email");

    const handleForgotPasswordSubmit: SubmitHandler<ForgotPassword> = async (data) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/password_reset/', data);
            if (response.status === 200) {
                toast.success("Password reset link sent successfully!");
                reset();
            }
        } catch (error) {
            console.error("There was an error sending the reset email:", error);
            toast.error("Something went wrong, please try again!");
        }
    }

    return (
        <div className='w-full flex flex-col gap-3 justify-center items-center min-h-screen bg-neutral-50'>
            <img src={logo} alt="logo" className='h-[40px]' />
            <form onSubmit={handleSubmit(handleForgotPasswordSubmit)}>
                <Card className='w-[400px] p-5 h-full flex flex-col font-satoshi shadow-md'>
                    <CardHeader>
                        <CardTitle className='font-cabinetbd text-2xl text-neutral-800 text-center'>Forgot Password?</CardTitle>
                    </CardHeader>
                    <CardContent className='flex gap-10 flex-col'>
                        <div className='flex gap-6 flex-col'>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email" className='font-satoshimd text-neutral-700 text-sm'>Email</Label>
                                <Input type="email" placeholder="Enter your email"  {...register("email")} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Button type='submit' className='h-[44px] text-base bg-orange-500 hover:bg-orange-400'>
                                Send reset link
                            </Button>
                            <Button variant={'ghost'}
                                className="hover:bg-white text-neutral-600"
                                onClick={() => navigate('/Login')}
                            >
                                <span className="flex items-center gap-1"><FiArrowLeft /> Back to login</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card >
            </form>
        </div>
    );
}

export default ForgotPasswordPage;
