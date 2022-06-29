import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Philosophy from "../components/Philosophy";

const philosophyPage = () => {
    return (
        <Layout pageTitle="Oxpitan | Philosophy">
            <NavOne />
            <PageHeader title="Our Philosophy" />
            <Philosophy />
            <Footer />
        </Layout>
    );
};

export default philosophyPage;
