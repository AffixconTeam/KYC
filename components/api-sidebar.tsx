"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Key, Server, ExternalLink } from "lucide-react"

interface ApiSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function ApiSidebar({ activeSection, setActiveSection }: ApiSidebarProps) {
  const sections = [
    { id: "introduction", label: "Introduction", icon: <FileText className="h-4 w-4 mr-2" /> },
    { id: "authentication", label: "Authentication", icon: <Key className="h-4 w-4 mr-2" /> },
    { id: "endpoints", label: "API Endpoints", icon: <Server className="h-4 w-4 mr-2" /> },
    { id: "swagger-test", label: "Test on Swagger", icon: <ExternalLink className="h-4 w-4 mr-2" /> },
  ]

  return (
    <div className="w-full lg:w-64 lg:min-h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 sticky top-0">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <h2 className="font-semibold text-lg text-slate-900 dark:text-slate-50">Documentation</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-64px)] p-4">
        <div className="space-y-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon}
              {section.label}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
