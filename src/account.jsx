import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "./Components/ui/avatar"
import { ArrowLeftToLine, ArrowRightToLine, Download, LogOut, Settings, User } from "lucide-react"
import { Button } from "./Components/ui/button"
import { Link, Outlet } from "react-router-dom"


export function Account()
{
    return (
        <motion.div style={{width: "100%", height: "100%", display: "flex"}}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
        >
            <motion.div className="bg-card flex flex-col items-center" style={{height: "100dvh", width: "20dvw", boxSizing: "border-box"}}>
                <Avatar className="w-36 h-36 m-10 border-2 border-border">
                    <AvatarImage src={"https://cdn-icons-png.flaticon.com/512/1253/1253756.png"}></AvatarImage>
                    <AvatarFallback><User size={40}></User></AvatarFallback>
                </Avatar>            
                <Button style={{width: "100%", borderRadius: 0, padding : "30px", justifyContent: "flex-start", gap: "25px"}} variant="secondary"><User></User>Account Info</Button>
                <Button style={{width: "100%", borderRadius: 0, padding : "30px", justifyContent: "flex-start", gap: "25px"}} variant="secondary"><Download></Download> Download</Button>
                <span style={{flex: 1}}></span>
                <Button style={{width: "100%", borderRadius: 0, padding : "30px", justifyContent: "flex-start", gap: "25px"}} variant="secondary"><Settings></Settings>Settings</Button>
                <Button style={{width: "100%", borderRadius: 0, padding : "30px", justifyContent: "flex-start", gap: "25px"}} variant="secondary"><LogOut></LogOut>Log out<h1></h1></Button>
            </motion.div>
            <motion.div className="bg-background" style={{height: "100dvh", width: "100dvw"}}>
                <Outlet></Outlet>
            </motion.div>
            <Link to={"../"}><ArrowRightToLine className="fixed right-5 top-5" style={{cursor: "pointer"}} size={35}></ArrowRightToLine></Link>
        </motion.div>
    )
}