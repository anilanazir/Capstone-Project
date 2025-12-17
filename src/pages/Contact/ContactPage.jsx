import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/validations/contactSchema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Contact Data:", data);
    reset();
    alert("Message sent successfully!");
  };

  return (
    <section className="min-h-screen bg-white py-30 ">
      <div className="container mx-auto flex flex-col md:flex-row gap-15">
       
        <div
          className="md:w-1/2 pr-0 md:pr-6  border-b md:border-b-0 md:border-r border-gray-300 pb-10 md:pt-0">
          <div className="flex flex-col gap-6 px-8">
            <h2 className="text-6xl font-medium mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6">
              Sit vulputate faucibus eget eget scelerisque faucibus malesuada
              nullam mollis ut montes, dui scelerisque ornare.
            </p>

          
            <div className="flex flex-col text-gray-700 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#5c9735]" />
                <span className="text-lg ml-3 font-medium text-[#4D4F48] mb-2">
                  Visit Us
                </span>
              </div>
              <span className="ml-10 text-[#4D4F48] font-bold">
                123 Demo St, San Francisco, CA 45678, United States
              </span>
            </div>

            <div className="flex flex-col text-gray-700 mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#5c9735]" />
                <span className="text-lg font-medium ml-3 text-[#4D4F48] mb-2">
                  Call Us
                </span>
              </div>
              <span className="ml-10 text-[#4D4F48] font-bold">
                +1 123-456-7890
              </span>
            </div>

            <div className="flex flex-col text-gray-700 mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#5c9735]" />
                <span className="text-lg font-medium ml-3 text-[#4D4F48] mb-2">
                  Email Us
                </span>
              </div>
              <span className="ml-10 text-[#4D4F48] font-bold">
                mail@example.com
              </span>
            </div>

            <hr />

           
            <div>
              <h6 className="text-2xl text-[#4D4F48] font-medium">Follow Us</h6>
              <div className="flex items-center gap-4 mt-4">
                <a href="#" className="text-gray-700 hover:text-green-700">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-green-700">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-green-700">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

    
        <div className="md:w-1/2 md:pl-6 pt-6 md:pt-0">
          <div className="space-y-10 pt-2">
            <h2 className="text-4xl font-bold mb-6">Drop us a line or two</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="flex flex-col">
                <label className="mb-1 font-semibold text-[#4D4F48]">
                  Name *
                </label>
                <Input placeholder="Full name" {...register("name")} />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-semibold text-[#4D4F48]">
                  Email *
                </label>
                <Input placeholder="Email address" {...register("email")} />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-semibold text-[#4D4F48]">
                  Comment or Message *
                </label>
                <Textarea
                  rows={4}
                  placeholder="Your message"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="bg-[#5c9735] hover:bg-green-800 text-white p-6 rounded-lg text-lg"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
