import React from "react";
import MainSection from "@/components/MainSection";
import AboutUs from "@/components/AboutUs";
import Accreditation from "@/components/Accreditation";
import ProgrammeOverview from "@/components/ProgrammeOverview";
import ProgrammeHighlights from "@/components/ProgrammeHighlights";
import WhyUs from "@/components/WhyUs";
import ProgrammeCurriculum from "@/components/ProgrammeCurriculum";
import ProgrammeDetails from "@/components/ProgrammeDetails";
import AdmissionProcess from "@/components/AdmissionProcess";
import OurRecruiters from "@/components/OurRecruiters";
import EligibilityCriteria from "@/components/EligibilityCriteria";
import FeeStructure from "@/components/FeeStructure";
import CampusLife from "@/components/CampusLife";
import TechLabs from "@/components/TechLabs";
import LectureHalls from "@/components/LectureHalls";
import HostelFacilities from "@/components/HostelFacilities";
import LibrarySection from "@/components/LibrarySection";
import SportsGallery from "@/components/SportsGallery";
import LawSpecializations from "@/components/LawSpecializations";







export default function HomePage() {
    return (
        <>
            <MainSection />
            <AboutUs />
            <Accreditation />
            <ProgrammeOverview />
            <ProgrammeHighlights />
            <WhyUs />
            <ProgrammeCurriculum />
            <LawSpecializations />
            <ProgrammeDetails />
            <CampusLife />
            <TechLabs />
            <LectureHalls />
            <LibrarySection />
            <SportsGallery />
            <HostelFacilities />
            <AdmissionProcess />
            <EligibilityCriteria />
            <OurRecruiters />
            <FeeStructure />
        </>
    );
}
