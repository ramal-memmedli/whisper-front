import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

function LoginRegister() {
  return (
    <div className="flex flex-wrap h-screen bg-[#FAEDE3] dark:bg-black">
      <div className="left w-full md:w-1/2 bg-white dark:bg-[#121212]">
        a
      </div>
      <div className="flex items-center justify-center right w-full md:w-1/2">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Username</Label>
                  <Input id="name" placeholder="Enter your username here" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Password</Label>
                  <Input id="username" type="password" placeholder="Enter your password here" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Username</Label>
                  <Input id="current" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="current">Email</Label>
                  <Input id="current" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="current">Password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Repeat password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Register</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default LoginRegister