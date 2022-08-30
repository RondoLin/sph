
import Mock from "mockjs";

import banner from './banner.json'
import floor from './floor.json'
import item from './item.json'
import cartList from './cartList.json'

Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})
Mock.mock("/mock/item",{code:200,data:item})
Mock.mock("/mock/cartList",{code:200,data:cartList})