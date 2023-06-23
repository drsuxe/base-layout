<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeader title="Layout boxed" />
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-left-radius="md"
          padding-right="6"
          padding-bottom="6"
        >
          <mp-simple-grid :columns="[1, 3]" spacing="6" padding-bottom="3">
            <mp-box
              background="white"
              padding="3"
              border-radius="md"
              border-width="1px"
              height="56"
            >
              <mp-text>Place content here...</mp-text>
            </mp-box>
            <mp-box
              background="white"
              padding="3"
              border-radius="md"
              border-width="1px"
              height="56"
            >
              <mp-text>Place content here...</mp-text>
            </mp-box>
            <mp-box
              background="white"
              padding="3"
              border-radius="md"
              border-width="1px"
              height="56"
            >
              <mp-text>Place content here...</mp-text>
            </mp-box>
          </mp-simple-grid>

          <mp-box padding-y="3">
            <mp-box
              background="white"
              padding="3"
              border-radius="md"
              border-width="1px"
              height="56"
            >
              <mp-text>Place content here...</mp-text>
            </mp-box>
          </mp-box>

          <mp-box padding-y="3">
            <mp-box
              background="white"
              padding="3"
              border-radius="md"
              border-width="1px"
              height="56"
            >
              <mp-text>Place content here...</mp-text>
            </mp-box>
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpSimpleGrid, MpText } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";

export default {
  name: "LayoutBoxed",
  components: {
    MpBox,
    MpFlex,
    MpSimpleGrid,
    MpText,
    Header,
    SubHeader,
    Sidebar,
  },
};
</script>