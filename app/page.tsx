"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Moon, Sun, Mail, Phone, MapPin, Download } from "lucide-react"

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        {/* Header with controls */}
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b print:hidden">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Kittipan Sukhantharot - Resume</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Resume Content */}
        <div className="max-w-4xl mx-auto p-6 space-y-8">
          {/* Header Section */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-primary">Kittipan Sukhantharot</h1>
                <p className="text-xl text-muted-foreground">Full-Stack Developer</p>

                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Phuket, Thailand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>sukhantharot.k@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>080-0393608</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                  <span>Marital Status: Married</span>
                  <span>•</span>
                  <span>Military Status: Exempted</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Bachelor of Science (Computer Science)</h3>
                  <p className="text-muted-foreground">Phuket Rajabhat University, Phuket Thailand</p>
                  <p className="text-sm text-muted-foreground">2013 – 2016</p>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold">Diploma in Business Computer</h3>
                  <p className="text-muted-foreground">Phuket Vocational College, Phuket Thailand</p>
                  <p className="text-sm text-muted-foreground">2009 – 2012</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Junior Full-Stack Developer</h3>
                    <Badge variant="secondary">Oct 2021 – Present</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">Fazwaz Phuket, Thailand</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Maintained and developed features on a large-scale Laravel-based web application</li>
                    <li>
                      Contributed to frontend components using Next.js and worked with GraphQL endpoints for dynamic
                      data fetching
                    </li>
                    <li>
                      Maintained legacy systems built with Yii2 and integrated Elasticsearch for advanced search
                      capabilities
                    </li>
                    <li>
                      Deployed and managed services using Docker and Kubernetes (K8s) across multiple environments
                    </li>
                    <li>Implemented GitHub Actions for CI/CD automation to streamline the deployment process</li>
                    <li>
                      Collaborated closely with cross-functional teams to debug, refactor, and improve system
                      performance
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Web Programmer</h3>
                    <Badge variant="secondary">Apr 2019 – Oct 2021</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">Sedna Asia Phuket, Thailand</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Designed and developed web applications</li>
                    <li>Conducted tests on software</li>
                    <li>Performed repairs, fixes bugs and maintenance procedures on system</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">Web Programmer</h3>
                    <Badge variant="secondary">Mar 2018 – Apr 2019</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">Phuket Jet Tour, Thailand</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Designed and developed web applications</li>
                    <li>Conducted tests on software</li>
                    <li>Performed repairs, fixes bugs and maintenance procedures on system</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">CCTV & IT Support</h3>
                    <Badge variant="secondary">May 2017 – Mar 2018</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">Phuket Gems Pavilion, Thailand</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Maintenance CCTV System Online every time</li>
                    <li>Analyze and correct errors what happens to the CCTV System</li>
                    <li>Support user Hardware, Software</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">IT Officer</h3>
                    <Badge variant="secondary">Nov 2016 – Apr 2017</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">The Village Coconut Island, Phuket, Thailand</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>System solutions Hardware, Software, Network</li>
                    <li>Analyze and correct errors what happens to the computer to complete</li>
                    <li>Support user Hardware, Software</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">System Engineer</h3>
                    <Badge variant="secondary">Mar 2015 – May 2015</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Smart Solution and Service Co.,Ltd., Samutprakan, Thailand
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>
                      Installed and performed maintenance on Domain Controller, Active Directory, File Server, Group
                      Policy, Veeam Backup, Network, Firewall by Fortigate
                    </li>
                    <li>Repaired and upgraded old systems, installed then configure new systems</li>
                    <li>Performed server updated on regular basis</li>
                    <li>Always stayed up-to-date about software</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Freelance Work Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Freelance Work</h2>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Full-Stack Developer</h3>
                  <Badge variant="outline">Jun 2023 – Dec 2025</Badge>
                </div>
                <p className="text-muted-foreground mb-3">Qashup, Bangkok, Thailand</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Design database schema POS system</li>
                  <li>
                    Initiated the project from scratch using Next.js for the frontend and NestJS for the backend API
                  </li>
                  <li>
                    Designed and implemented the overall architecture, including folder structure, routing strategy, and
                    API integration
                  </li>
                  <li>
                    Established best practices for code organization, component structure, and backend service
                    modularization
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Part-time Work Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Part-time Work</h2>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Website Designer</h3>
                  <Badge variant="outline">Oct 2016 – Apr 2019</Badge>
                </div>
                <p className="text-muted-foreground mb-3">Kazamedia, Phuket, Thailand</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Design Website Job by Job</li>
                  <li>Installed and performed maintenance WordPress</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "MongoDB", "PostgreSQL"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Laravel", "Next.js", "React.js", "NestJS", "Nuxt (Vue, Vuex)", "React Native"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "JavaScript", "TypeScript", "Node.js", "Classic ASP", "GoLang"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Platforms & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Kubernetes", "VMware", "Veeam Backup", "PHPStorm", "Navicat"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Servers</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Windows Server 2008-2012", "Ubuntu"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Hotel Software</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Opera", "Micros", "MC", "Q3"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* References Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">References</h2>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold">Prapond Saechua</h3>
                <p className="text-muted-foreground">Chief Technology Officer(CTO)</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p>Tel: 081-969-1839, 081-607-9388</p>
                  <p>Email: pond@fazwaz.com</p>
                  <p>Website: https://www.fazwaz.com</p>
                  <p>Website: https://dbventures.io/</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-muted-foreground text-sm print:hidden">
          <p>© 2024 Kittipan Sukhantharot. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
