import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from "@/assets/Images/Logo.png"
import { MdClose } from "react-icons/md";
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

export interface ResetPassword {
    password: string;
    retypedpassword: string;
    token: string;
}

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, watch } = useForm<ResetPassword>();
    

    const handleResetPasswordSubmit: SubmitHandler<ResetPassword> = async (data) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/password_reset/confirm/', data);
            if (response.status === 200) {
                toast.success("Password reset successfully!");
                navigate('/Login');
            }
        } catch (error) {
            console.error("There was an error sending the reset email:", error);
            toast.error("Something went wrong, please try again!");
        }
    }

    const password = watch("password");
    const retypedPassword = watch("retypedpassword");
    const passwordsMatch = password === retypedPassword;
    const isButtonDisabled = password === '' || retypedPassword == '' || !passwordsMatch;

    useEffect(() => {
        if (token) {
            navigate(`/ResetPassword/${token}`);
        } else {
            console.error('Reset password token not found');
        }
    }, [token]);

    return (
        <div className='w-full flex flex-col gap-3 justify-center items-center min-h-screen bg-neutral-50'>
            <img src={logo} alt="logo" className='h-[40px]' />
            <form onSubmit={handleSubmit(handleResetPasswordSubmit)}>
                <Card className='w-[400px] p-5 h-full flex flex-col font-satoshi shadow-md'>
                    <CardHeader>
                        <CardTitle className='font-cabinetbd text-2xl text-neutral-800 text-center'>Reset Password</CardTitle>
                    </CardHeader>
                    <CardContent className='flex gap-10 flex-col'>
                        <div className='flex gap-6 flex-col'>
                            <Input type="hidden" value={token} {...register("token")} />
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="password" className='font-satoshimd text-neutral-700 text-sm'>New password</Label>
                                <Input type={showPassword ? 'text' : 'password'} {...register("password")} />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="retypedpassword" className='font-satoshimd text-neutral-700 text-sm'>Retype password</Label>
                                <Input type={showPassword ? 'text' : 'password'}  {...register("retypedpassword")} />
                                {!passwordsMatch &&
                                    (<div className='flex gap-1 items-center'>
                                        <MdClose style={{ color: '#cc0000' }} />
                                        <p className='text-sm text-[#cc0000]'>Password do not match</p>
                                    </div>)
                                }
                            </div>
                            <div className='flex items-center gap-2'>
                                <Checkbox id="company" className='border-neutral-600' onClick={() => setShowPassword(!showPassword)} />
                                <label htmlFor="company" className="text-sm text-neutral-600 font-satoshimd leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Show Password
                                </label>
                            </div>
                        </div>
                        <Button type='submit' className='h-[44px] bg-orange-500 hover:bg-orange-400' disabled={isButtonDisabled}  >
                            <span className='text-base font-satoshimd'>
                                Reset password
                            </span>
                        </Button>
                    </CardContent>
                </Card >
            </form>
        </div>
    );
};

export default ResetPasswordPage;
