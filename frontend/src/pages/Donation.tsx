import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { selectIsAuthenticated } from "@/app/slices/authSlice";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "react-toastify";
import CookieHelper from "@/helpers/CookieHelper";
import { useParams } from "react-router-dom";

const Donation = () => {
  const form = useForm();
  const [clothType, setClothType] = useState([]);
  const [clothBank, setClothBank] = useState([]);

  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { clothBankId, clothBankTitle } = useParams();

  const onSubmitHandler = (data: FieldValues) => {
    const token = CookieHelper.getCookie("token");
    console.log(token);
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/donation/donations/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Donated successfully! Visit to the Cloth Bank as soon as possible ");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const getClothType = async () => {
    await axios
      .get("http://127.0.0.1:8000/donation/clothtypes/")
      .then((res) => {
        setClothType(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const getClothBank = async () => {
    await axios
      .get("http://127.0.0.1:8000/donation/getclothbanks/")
      .then((res) => {
        setClothBank(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    getClothType();
    getClothBank();

    if (clothBankId && clothBankTitle) {
      form.setValue("cloth_bank", clothBankId);
    }
  }, [clothBankId, clothBankTitle]);

  return (
    <>
      <div className="max-w-lg mx-auto p-4 border rounded shadow-lg mt-36">
        {!isAuthenticated &&(
          <div className="flex flex-col items-center">
          <p className="mb-4 text-center">Please log in to donate</p>
          <Button
            onClick={handleLogin}
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange600"
          >
            Log In
          </Button>
        </div>
        )}
        {isAuthenticated && (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmitHandler)}
              className="space-y-8 p-6"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-3xl xl:text-4xl font-semibold text-orange-700">
                  Donate now!
                </h1>
                <p className="text-lg md:text-xlxl leading-6 text-gray-600 max-w-2xl">
                  Make a difference with your donation.
                </p>
              </div>
              <FormField
                control={form.control}
                name="no_of_clothes"
                rules={{
                  required: "Number of clothes is required",
                  min: {
                    value: 1,
                    message: "Number of clothes must be greater than 0",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="font-satoshimd text-base">
                        No of clothes
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter amount of clothes"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="cloth_type"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 w-5/6">
                    <FormLabel>
                      <span className="font-medium text-base">Cloth Type</span>
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a cloth type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {clothType?.map((type: any) => (
                          <SelectItem
                            className="text-black"
                            value={type["0"]}
                            key={type["0"]}
                          >
                            {type["1"]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                name="cloth_bank"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 w-5/6">
                    <FormLabel>
                      <span className="font-medium text-base">Cloth Bank</span>
                    </FormLabel>
                    {clothBankId && clothBankTitle ? (
                      <Select
                        disabled={true}
                        onValueChange={(value) => {
                          field.onChange(parseInt(value));
                        }}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={clothBankTitle} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem
                            className="text-black"
                            value={clothBankId}
                            key={clothBankId}
                          >
                            {clothBankTitle}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Select
                        onValueChange={(value) => {
                          field.onChange(parseInt(value));
                        }}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a cloth bank" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {clothBank?.map((bank: any) => (
                            <SelectItem
                              className="text-black"
                              value={bank.id}
                              key={bank.id}
                            >
                              {bank.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-300 mt-6"
              >
                Submit
              </Button>
            </form>
          </Form>
        )}
      </div>
    </>
  );
};

export default Donation;
