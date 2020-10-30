// 按需全局引入 vant组件
import Vue from 'vue'
import {  Col, Row, Button, List, Cell, CellGroup, Field, Tabbar, TabbarItem, NavBar, Icon, Grid, GridItem } from 'vant'
Vue.use(Button)
Vue.use(Cell).use(CellGroup).use(Field)
Vue.use(List)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Grid).use(GridItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar).use(TabbarItem)
