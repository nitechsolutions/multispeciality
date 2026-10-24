"use client";

import {
  ShieldCheck,
  CircleHelp,
} from "lucide-react";

export default function EmpanelmentInfo() {
  return (
    <section className="pt-10 pb-5">
      <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card p-8 shadow-sm">

        <div className="space-y-6">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-primary-light p-3">
              <ShieldCheck
                size={24}
                className="text-primary"
              />
            </div>

            <div>

              <h3 className="font-semibold text-heading">
                Regular Updates
              </h3>

              <p className="mt-2 text-sm md:text-md leading-6">
                Our empanelment list is updated regularly.
                Please contact our hospital if your
                organization is not listed.
              </p>

            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-secondary-light p-3">
              <CircleHelp
                size={24}
                className="text-secondary"
              />
            </div>

            <div>

              <h3 className="font-semibold text-heading">
                Need Assistance?
              </h3>

              <p className="mt-2 text-sm md:text-md leading-6">
                Our helpdesk will assist you regarding
                eligibility, approvals, documentation,
                insurance claims and cashless admission.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}