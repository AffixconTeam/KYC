"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function ApiVerificationDetails() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="border border-red-200 dark:border-red-800">
      <CardContent className="pt-6">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <CollapsibleTrigger className="flex items-center w-full text-left font-medium text-red-600 dark:text-red-400">
            {isOpen ? <ChevronDown className="h-5 w-5 mr-2" /> : <ChevronRight className="h-5 w-5 mr-2" />}
            <span className="text-lg">Detailed Description</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-4">
            <div>
              <h3 className="text-green-600 dark:text-green-400 font-semibold">1) IDV Verified Level</h3>
              <p className="mb-2">A multi-attribute determination of verification status.</p>
              <ul className="list-disc list-inside ml-4 mb-2">
                <li>
                  Consolidates matches across <strong>Name</strong>, <strong>Address</strong>, and{" "}
                  <strong>Date of Birth (DOB)</strong> into a single outcome.
                </li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>M1</strong>: Full Name, Full Address, and DOB Match
                    </li>
                    <li>
                      <strong>N1</strong>: Full Name and Full Address Match
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>M2</strong>: Full Name and DOB Match
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mb-4">
                Verification Level Hierarchy: The verification levels are prioritized as:{" "}
                <strong>M1 &gt; N1 &gt; M2</strong>
              </p>
            </div>

            <div>
              <h3 className="text-green-600 dark:text-green-400 font-semibold">2) IDV Contact Verified Level</h3>
              <p className="mb-2">This process determines contact verification by evaluating multiple attributes.</p>
              <ul className="list-disc list-inside ml-4 mb-2">
                <li>
                  Matches across <strong>Name</strong>, <strong>Mobile</strong>, and <strong>Email</strong> are combined
                  into a unified verification outcome.
                </li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>P1</strong>: Match on Full Name, Mobile, and Email
                    </li>
                    <li>
                      <strong>P2</strong>: Match on Full Name and Mobile
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>P3</strong>: Match on Full Name and Email
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mb-4">
                Verification Level Priority: The verification levels are ranked by reliability as follows:{" "}
                <strong>P1 &gt; P2 &gt; P3</strong>
              </p>
            </div>

            <div>
              <h3 className="text-green-600 dark:text-green-400 font-semibold">3) IDV Record Verified</h3>
              <p className="mb-2">A validation indicator determined by Single source.</p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>
                  <strong>True</strong>: The record is verified and meets the required validation criteria.
                </li>
                <li>
                  <strong>False</strong>: The record is not verified and fails to meet the validation standards.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-green-600 dark:text-green-400 font-semibold">4) IDV Multi Level Verification</h3>
              <p className="mb-2">An advanced validation indicator determined by multiple sources.</p>
              <ul className="list-disc list-inside ml-4 mb-2">
                <li>
                  <strong>True</strong>: The record is validated by meeting one or more multi-condition criteria,
                  ensuring higher reliability.
                </li>
                <li>
                  <strong>False</strong>: The record does not satisfy the multi-condition criteria, indicating
                  insufficient validation from multiple sources.
                </li>
              </ul>

              <p className="mb-2">
                A record is marked as <strong>True</strong> if any of the following conditions are met:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>M1</strong> &gt;= 2
                    </li>
                    <li>
                      <strong>M1</strong> &gt;= 1 <strong>and</strong> <strong>M2</strong> &gt;= 1
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>M1</strong> &gt;= 1 <strong>and</strong> <strong>N1</strong> &gt;= 1
                    </li>
                    <li>
                      <strong>M2</strong> &gt;= 1 <strong>and</strong> <strong>N1</strong> &gt;= 1
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-green-600 dark:text-green-400 font-semibold">5) Profile</h3>
              <p className="mb-4">This section provides the database records that align with the input data.</p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Returns data entries from the database that match the provided input criteria.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-green-600 dark:text-green-400 font-semibold">6) Scoring</h3>
              <p className="mb-2">A score quantifying how closely each input matches the expected values.</p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>(60-99) indicates a fuzzy match.</li>
                <li>100 indicates an exact match.</li>
                <li>0 indicates no match.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-green-600 dark:text-green-400 font-semibold">7) Full Name Similarity</h3>
              <p className="mb-4">Measures how well the full input name matches the target name.</p>
            </div>

            <div>
              <h3 className="text-green-600 dark:text-green-400 font-semibold">8) Name Match Level</h3>
              <p className="mb-2">Categorizes overall name matching.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-disc list-inside ml-4">
                    <li>Exact Match</li>
                    <li>Middle Name Mismatch</li>
                    <li>SurName Only Match</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside ml-4">
                    <li>Initial Match</li>
                    <li>Hyphenated Match</li>
                    <li>Transposed Match</li>
                  </ul>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
