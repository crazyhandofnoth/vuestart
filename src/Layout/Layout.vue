<script setup>

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const breadcrumbs = computed(() => {
    return route.meta.breadcrumb;
});


</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">


                <el-menu default-active="1" class="el-menu-vertical-demo">


                    <router-link style="color: blue;text-decoration-line: none" to="/counter">
                        <el-menu-item index="1">

                            <el-icon>

                            </el-icon>
                            <span>counter</span>
                        </el-menu-item>
                    </router-link>
                    <router-link style="color: blue;text-decoration-line: none" to="/todolist">
                        <el-menu-item index="2">


                            <el-icon>

                            </el-icon>
                            <span>To do</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </el-aside>
            <el-container>



                <el-header>




                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" :to="item.path">{{
                            item.name }}</el-breadcrumb-item>

                    </el-breadcrumb>





                </el-header>











                <el-main>

                    <router-view></router-view>


                </el-main>
            </el-container>
        </el-container>
    </div>
</template>