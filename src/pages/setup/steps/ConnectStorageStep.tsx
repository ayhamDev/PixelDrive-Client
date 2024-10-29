import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
const ConnectStorage = () => {
  const [formData, setFormData] = useState({
    name: "",
    storageType: "ftp", // default value
    host: "",
    port: "",
    username: "",
    password: "",
    apiKey: "",
    accessToken: "",
    secretKey: "",
    bucketName: "",
    basePath: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Handle form submission logic here
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect Stroage</CardTitle>
        <CardDescription>
          Please choose the storage type and provide the necessary details{" "}
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ConnectStorage;
