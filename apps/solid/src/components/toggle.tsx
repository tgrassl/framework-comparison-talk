import { createSignal } from "solid-js";
import server$ from "solid-start/server";

export default function Toggle(props: { children: any }) {
  const [open, setOpen] = createSignal(true);

  const rpc = server$(() => {
    console.log("Hi from the server");
    return "Welcome to solid start!";
  });

  const handleClick = async () => {
    setOpen((o) => !o);
    const rpcResponse = await rpc();
    console.log({ rpcResponse });
  };

  return (
    <>
      <div class="toggle" classList={{ open: open() }}>
        <a onClick={handleClick}>{open() ? "[-]" : "[+] comments collapsed"}</a>
      </div>
      <ul
        class="comment-children"
        style={{ display: open() ? "block" : "none" }}
      >
        {props.children}
      </ul>
    </>
  );
}
