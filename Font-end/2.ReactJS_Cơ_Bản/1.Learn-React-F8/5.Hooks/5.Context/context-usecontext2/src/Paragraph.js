import { ThemeContext } from "./App"; // 1.3 Sử dụng Context
import { useContext } from "react"; // 1.4 Để sử dụng Consumer(nhập DL) trong context ta import useContext trong React


export default function Paragraph() {
  const theme = useContext(ThemeContext) // 1.5 truyền thằng Context vào useContext của react để sử dụng
 // ==> bây giờ những value của bên Provider sẽ được nhận trong biến này mà không cần bước trung gian

    
  return (
      <p className={theme}>
          Context provider a way to pass data..........................................
      </p>
  );
}
