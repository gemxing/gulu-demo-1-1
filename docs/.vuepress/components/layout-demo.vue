<template>
  <div>
    <h2>布局1</h2>
    <h4>预览</h4>
    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">header</g-header>
      <g-content style="height: 100px; background:deepskyblue;">content</g-content>
      <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
    </g-layout>
    <h4>代码:</h4>
    <pre>
            <code>{{content1}}</code>
        </pre>
    <h2>布局2</h2>
    <h4>预览</h4>
    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">header</g-header>
      <g-layout>
        <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">sider</g-sider>
        <g-content style="height: 100px; background:deepskyblue;">content</g-content>
      </g-layout>
      <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
    </g-layout>
    <h4>代码:</h4>
    <pre>
            <code>{{content2}}</code>
        </pre>
    <h2>布局3</h2>
    <h4>预览</h4>
    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </g-sider>
  <g-layout>
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
</g-layout>
    <h4>代码:</h4>
    <pre>
            <code>{{content3}}</code>
        </pre>
  </div>
</template>

<script>
import Row from "../../../src/row";
import Col from "../../../src/col";
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Sider from "../../../src/sider";
import Content from "../../../src/content";
import Footer from "../../../src/footer";
export default {
  components: {
    "g-row": Row,
    "g-col": Col,
    "g-layout": Layout,
    "g-header": Header,
    "g-sider": Sider,
    "g-content": Content,
    "g-footer": Footer,
  },
  data() {
    return {
      content1: `
        <g-layout style="color: white; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
                header
            </g-header>
            <g-content style="height: 100px; background:deepskyblue;">
                content
            </g-content>
            <g-footer style="height: 50px; background:lightskyblue;">
                footer
            </g-footer>
        </g-layout>`,
      content2: `
        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
                header
            </g-header>
            <g-layout>
                <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                    sider
                </g-sider>
                <g-content style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
            </g-layout>
            <g-footer style="height: 50px; background:lightskyblue;">
                footer
            </g-footer>
        </g-layout>`,
      content3: `
        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-sider style=" background:#ddd; width:200px; color: black;">
                sider
            </g-sider>
            <g-layout>
                <g-header style="height: 50px; background:lightskyblue;">
                    header
                </g-header>
                <g-content style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
                <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                </g-footer>
            </g-layout>
        </g-layout>
            `,
    };
  },
};
</script>
