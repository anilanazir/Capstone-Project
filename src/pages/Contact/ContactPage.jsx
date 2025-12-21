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
    <section className="min-h-screen bg-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className=" md:w-1/2 px-6 md:px-10 pb-12 md:pb-0  border-b md:border-b-0 md:border-r border-gray-300">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium">
              Get In Touch
            </h2>

            <p className="text-gray-600 max-w-md">
              Sit vulputate faucibus eget eget scelerisque faucibus malesuada
              nullam mollis ut montes, dui scelerisque ornare.
            </p>

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#5c9735]" />
                <h3 className="text-lg font-medium text-[#4D4F48]">Visit Us</h3>
              </div>
              <p className="ml-8 mt-1 font-bold text-[#4D4F48]">
                123 Demo St, San Francisco, CA 45678, United States
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#5c9735]" />
                <h3 className="text-lg font-medium text-[#4D4F48]">Call Us</h3>
              </div>
              <p className="ml-8 mt-1 font-bold text-[#4D4F48]">
                +1 123-456-7890
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#5c9735]" />
                <h3 className="text-lg font-medium text-[#4D4F48]">Email Us</h3>
              </div>
              <p className="ml-8 mt-1 font-bold text-[#4D4F48]">
                mail@example.com
              </p>
            </div>

            <hr />

            <div>
              <h6 className="text-2xl font-medium text-[#4D4F48]">Follow Us</h6>
              <div className="flex items-center gap-4 mt-4">
                <Instagram className="w-6 h-6 hover:text-green-700 cursor-pointer" />
                <Facebook className="w-6 h-6 hover:text-green-700 cursor-pointer" />
                <Youtube className="w-6 h-6 hover:text-green-700 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 px-6 md:px-15 pt-12 md:pt-0">
          <div className="space-y-10">
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Drop us a line or two
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col">
                <label className="mb-1 font-semibold text-[#4D4F48]">
                  Name *
                </label>
                <Input className="py-6!" placeholder="Full name" {...register("name")} />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="mb-1 font-semibold text-[#4D4F48] ">
                  Email *
                </label>
                <Input className="py-6!" placeholder="Email address" {...register("email")} />
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
                className="bg-[#5c9735] hover:bg-green-800 text-white px-8 py-6 rounded-lg text-lg"
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
