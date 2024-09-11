import { ConfigProvider as AntDesignProvider } from "antd";
import RoutesWrapper from "src/router/RoutesWrapper";
import { validateMessages } from "utils/antdUtils";
import themes from "src/theme";
import "src/assets/styles/reset.css";
import "src/assets/styles/rtl.css";

function App() {
  return (
    <main dir="rtl">
      <AntDesignProvider
        direction="rtl"
        theme={themes.light}
        form={{
          requiredMark: false,
          validateMessages: validateMessages("fa"),
        }}
      >

          <RoutesWrapper />
      </AntDesignProvider>
    </main>
  );
}

export default App;
