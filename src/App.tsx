import "./App.css";
import mainImage from "./assets/main.svg";
import { Input, Form, InputNumber } from "antd";

type FormValues = { title: string; game_quantity: number };
const labelValue = (value: string | undefined) => {
  return <span className="text-pink-600 font-semibold">{value}</span>;
};

export function App() {
  function onFinish(values: FormValues) {}
  return (
    <>
      <div className="flex justify-center items-center gap-x-4 mb-6">
        <h1 className="text-4xl font-bold text-pink-500 drop-shadow-md ">
          Bingo de Chá de Bebê
        </h1>
        <img src={mainImage} alt="Ilustração" className="h-12" />
      </div>

      <Form
        layout="vertical"
        onFinish={onFinish}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-pink-500 my-4 drop-shadow">
          Gerador de Cartelas
        </h2>

        <Form.Item label={labelValue("Título do Bingo")} name="title">
          <Input placeholder="Ex: Chá da Maria" />
        </Form.Item>

        <Form.Item
          label={labelValue(" Quantidade de Jogos")}
          name="game_quantity"
          rules={[
            { required: true, message: "Informe a quantidade de cartelas." },
          ]}
          className="w-full"
        >
          <InputNumber placeholder="Ex: 12" />
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className=" bg-gray-950 hover:bg-gray-800 text-white font-semibold py-3 cursor-pointer shadow transition-colors duration-300 w-[50%] mb-3 rounded-2xl"
          >
            Gerar Cartelas
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
