import { AreaChart, CalendarDays, Home, ListTodo, User } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Link, Outlet } from "react-router-dom"
export function Navigation()
{
    return (
        <>
        <motion.div className="flex flex-col gap-5 fixed top-0 p-5 m-5 bg-card" style={{borderRadius: "0.5rem"}}
        initial={{y: 100}}
        whileInView={{y: 0}}>
            <Link to={"home"}><Button><Home size={20}></Home></Button></Link>
            <Link to={"planner"}><Button><CalendarDays size={20}></CalendarDays></Button></Link>
            <Link to={"todo"}><Button><ListTodo size={20}></ListTodo></Button></Link>
            <Link to={"analytics"}><Button><AreaChart size={20}></AreaChart></Button></Link>
        </motion.div>
        <motion.div className="fixed top-0 right-0 p-5 m-5" style={{borderRadius: "0.5rem"}}
        initial={{y: 100}}
        whileInView={{y: 0}}>
            <Link to={"account"}><Button><User size={20}></User></Button></Link>
        </motion.div>
        <Outlet></Outlet>
        </>
    )
}