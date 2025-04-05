import "./App.css";
import mainImage from "./assets/main.svg";
import { Input, Form, InputNumber, Button } from "antd";
import { useGenerateBingoCards } from "./hook";

export type FormValues = { title: string; quantity: number };

const labelValue = (value: string | undefined) => {
  return <span className="text-pink-600 font-semibold">{value}</span>;
};

export function App() {
  const [form] = Form.useForm();
  const { mutateAsync: generateBingo, isPending } = useGenerateBingoCards();
  console.log(isPending);

  async function onFinish(values: FormValues) {
    const { quantity, title } = values;

    await generateBingo({ quantity, title });
    form.resetFields();
  }

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
          label={labelValue("Quantidade de Jogos")}
          name="quantity"
          rules={[
            { required: true, message: "Informe a quantidade de cartelas." },
          ]}
          className="w-full"
        >
          <InputNumber placeholder="Ex: 12" min={1} />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit"
            loading={isPending}
            className="!bg-gray-950 !hover:bg-gray-800 !text-white !font-semibold !py-3 !shadow !transition-colors !duration-300 !w-[50%] !mb-3 !rounded-2xl !border-none !h-auto"
          >
            {isPending ? "Carregando..." : "Gerar Cartelas"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
