<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeaderChild title="Child menu" subtitle="Layout child menu" />
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="6"
        >
          <mp-text>Place content here...</mp-text>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText } from "@mekari/pixel";
import Header from "../components/Header";
import SubHeaderChild from "../components/SubHeaderChild";
import Sidebar from "../components/Sidebar";
import SidebarChild from "../components/SidebarChild";

export default {
  name: "LayoutChildMenu",
  components: {
    MpBox,
    MpFlex,
    MpText,
    Header,
    SubHeaderChild,
    Sidebar,
    SidebarChild,
  },
};
</script>