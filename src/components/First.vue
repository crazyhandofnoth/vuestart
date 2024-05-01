<template>
  <h3>
    template grammar
  </h3>
  <p :class="sclass" :title="stitle">{{ msg }}</p>
  <!--  attrs bind 同名简写 vue 3.4-->
  <p v-bind="objectOfAttrs">{{ num + 1 }}</p>
  <p>{{ ok ? num + 1 : 0 }}</p>
  <p>{{ msg.split('').reverse().join('') }}</p>
  <p v-html="rawHTML"></p>
  <button :disabled="sdisabled" @click="buttoncount++">{{ buttoncount }}</button>
  <!--内联事件处理器-->
  <button :disabled="sdisabled" @dblclick="add('mess',$event)">{{ buttoncount }}</button>
  <!--  方法事件处理器-->


  <p v-if="flag==='a'">see me</p>
  <p v-else-if="flag==='b'">see me?</p>
  <p v-else-if="flag==='c'">see me??</p>
  <p v-else>ok</p>
  <p v-show="flag==='e'">osk</p>

  <button @click="addListItem">add data</button>
  <ul>


    <li v-for="(item,index) in array2" key="index">
      {{ item }}
    </li>

  </ul>

  <span v-for="n in 10" :style="{fontSize:'50px',color:'purple'}">{{n}}</span>
<!--  v-for range ,start at 1 -->

  <div v-for="({score,id,name},index) in array" :key="id" @click="add('mess',$event)">{{ name }} :
    {{ score }}--{{ index }}
  </div>
  <p v-for="(item,key,index) of userInfo">{{ item }}--{{ index }}--{{ key }}</p>
  <div @click="clickDiv">

    <a @click.prevent.stop="clickHandler" href="https://discord.com">dcard</a><!-- 时间修饰符-->
  </div>

  <h3>{{ dixiashi.name }}</h3>
  <p>{{ dxsContant }}</p>

  <h3 :class="{'active':isActive}">class attr</h3>
  <!--  //class 样式绑定-->
  <h3 :class="[isActive,{'active':isActive}]">class attr</h3>
  <!--  //class 样式绑定 array-->


  <p :style="{color:activeColor,fontSize:fontSize+'px'}">style color</p>
  <p :style="styleObject">style color</p>
  <p :style="[styleObject]">style color</p>

  <p>first end==============================================================================================================================================================================</p>
</template>

<script>
export default {
  name: "First",
  data() {
    return {
      buttoncount: 0,
      msg: '24',
      num: 23,
      ok: true,
      rawHTML: "<p>something</p>",

      sclass: "someclass",
      stitle: null || undefined || 'cla',
      sdisabled: false,
      objectOfAttrs: {
        sid: 'usa',
        sclass: "someclass"
      },
      flag: 'e',
      array: [{
        id: 0,
        name: 'sck',
        score: 100
      }, {id: 1, name: 'zb', score: 99}
      ],
      array2: [
        'a', 'b', 'c'
      ],
      userInfo: {
        id: 1,
        name: 'sc',
        score: 99
      },

      dixiashi: {
        name: "sck",
        contant: ["klmzfxd", "dxssj", "zyf"]
      },

      isActive: true,
      activeColor: 'aqua',
      fontSize: 40,
      styleObject:
          {color: 'azure', fontSize: '40px'}

    }

  },
  methods: {
    // 箭头函数没有自己的 this 不可使用箭头
    add(msg, e) {
      this.buttoncount++
      console.log(e.target.innerHTML)
      console.log(msg)

    },
    clickHandler(e) {
      // e.preventDefault();//preventDefault

      console.log('<a> click done')
      // e.stopPropagation() // 阻止繁殖
    },
    clickDiv() {
      console.log('div')
    },

    addListItem() { //数组变化侦测
      //this.array2.push('d') //auto UI update | one of 变更方法
      this.array2 = this.array2.concat(['d']) //no auto UI update | one of 替换方法 {filter, slice..}
      this.array2 = this.array2.concat(this.array)
      console.log(this.array2)
    }
  },
  watch: {
    msg(newValue, oldValue) { // 侦听器
      console.log(newValue, oldValue)
    }
  },
  computed: { //计算属性
    dxsContant() {
      return this.dixiashi.contant.length > 0 ? 'yes' : 'no'
    }
  }
}
</script>


<style>
.someclass {
  color: aqua;
  font-size: 30px;
}

.active {
  color: aquamarine;
  font-size: 40px;
}
</style>