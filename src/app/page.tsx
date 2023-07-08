import Form from "@/components/Form/Form";




export default function Home() {
  return (
    <main className="bg-slate-200">
      <div className="w-screen h-screen flex flex-1 items-center justify-center">
        <Form url={"login"} btnText="Entrar" text="Entrar" target="register" textRedirect="Criar Conta" forgotPassword/>
      </div>
    </main>
  )
}
