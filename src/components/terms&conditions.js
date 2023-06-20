import React, { useEffect } from "react";
import Navcomponent from "./navbar";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { motion as m } from "framer-motion";
import Footer from "./footer";
import $ from "jquery";

const Termsandconditions = () => {
  useEffect(() => {
    var backtoTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 4100) {
        backtoTop.classList.add("active");
      } else {
        backtoTop.classList.remove("active");
      }
      backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
    });

    $(".navbar-toggler").on("click", function () {
      $(".nav-item").toggleClass("animate");
      $(".iconone").toggleClass("active");
      $(".icontwo").toggleClass("active");
      $(".toggletwoicon").toggleClass("active");
      $(".togglefouricon").toggleClass("active");
    });
  }, []);
  return (
    <>
      <m.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a id="back-to-top" href="#" className="back-to-top" role="button">
          <p className="scrollbtnp">Up</p>
        </a>
        <div className="smooth-wrapper" id="smooth-wrapper">
          <div id="smooth-content">
            <section id="termsconditons">
            <Navcomponent />
              <div className="container-fluid">
                <div className="row">
                  <h1 className="termsheading">TERMS AND</h1>
                  <h1 className="termsheading2">CONDITIONS</h1>
                  <div className="col-md-6">
                    <div className="termscontent">
                      <h4>Intorduction</h4>
                      <p>
                        1.1. These terms and conditions govern the relationship
                        between ConsantinePr ("ConstantinePr") and its clients
                        ("Clients") regarding the provision of advertising,
                        media, and communications services ("Services").
                      </p>
                      <p>
                        1.2. By engaging the ConstantinePr’s Services, the
                        Client agrees to be bound by these terms and conditions.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Client Obligations</h4>
                      <p>
                        3.1. The Client will provide ConstantinePr with all
                        necessary information and materials to enable the Agency
                        to provide the Services.
                      </p>
                      <p>
                        3.2. The Client will ensure that all information and
                        materials provided to ConstantinePr are accurate,
                        complete, and not misleading.
                      </p>
                      <p>
                        3.3. The Client will promptly respond to all requests
                        for information or feedback from ConstantinePr.
                      </p>
                      <p>
                        3.4. The Client will not use the Services for any
                        unlawful or unethical purpose.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Intellectual Property</h4>
                      <p>
                        5.1. ConstantinePr retains ownership of all intellectual
                        property rights in any materials created by
                        ConstantinePr in the course of providing the Services,
                        including but not limited to designs, concepts, and
                        strategies.
                      </p>
                      <p>
                        5.3. The Client agrees not to use any materials created
                        by the Agency for any other purpose without the Agency's
                        prior written consent.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Limitation of Liability</h4>
                      <p>
                        7.1. ConstantinePr will not be liable for any loss or
                        damage suffered by the Client or any third party in
                        connection with the provision of the Services, except to
                        the extent that such loss or damage arises from the
                        ConstantinePr’s negligence, fraud, or willful
                        misconduct.
                      </p>
                      <p>
                        7.2. The total liability of ConstantinePr to the Client
                        in connection with the provision of the Services will
                        not exceed the total fees paid by the Client to
                        ConstantinePr for the Services.
                      </p>
                      <p>
                        7.3. ConstantinePr will not be liable for any indirect,
                        special, or consequential loss or damage, or any loss of
                        profit, revenue, or business opportunity, whether or not
                        such loss or damage was foreseeable or the ConstantinePr
                        had been advised of the possibility of such loss or
                        damage.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Governing Law and Jurisdiction</h4>
                      <p>
                        9.1. These terms and conditions will be governed by and
                        construed in accordance with the laws of the Islamic
                        Republic of Pakistan.
                      </p>
                      <p>
                        9.2. Any dispute arising out of or in connection with
                        these terms and conditions will be subject to the
                        exclusive jurisdiction of the courts of the Islamic
                        Republic of Pakistan.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="termscontent">
                      <h4>Services</h4>
                      <p>
                        2.1. ConstantinePr will provide the Services to the
                        Client with reasonable care and skill, and in accordance
                        with the Client's instructions, subject to the terms of
                        these terms and conditions.
                      </p>
                      <p>
                        2.2. ConstantinePr will use its reasonable efforts to
                        achieve the objectives set out in the Client's brief,
                        but ConstatinePr cannot guarantee any specific results.
                      </p>
                      <p>
                        2.3. ConstantinePr reserves the right to subcontract any
                        of the Services to a third party, subject to the
                        Client's prior written approval.
                      </p>
                      <p>
                        2.4. ConstantinePr may, at its sole discretion, decline
                        to provide the Services or terminate its provision of
                        the Services at any time.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Fees and Payment</h4>
                      <p>
                        4.1. The Client will pay ConstantinePr the fees set out
                        in ConstantinePr’s proposal or estimate, or as otherwise
                        agreed in writing.
                      </p>
                      <p>
                        4.2. The fees will be payable in the currency and on the
                        terms specified in ConstantinePr’s invoice.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Confidentiality</h4>
                      <p>
                        6.1. ConstantinePr and the Client agree to keep
                        confidential any information relating to the other
                        party's business or affairs that is disclosed or
                        obtained in connection with the provision of the
                        Services.
                      </p>
                      <p>
                        6.2. ConstantinePr and the Client may disclose
                        confidential information to their employees,
                        contractors, and professional advisers who have a need
                        to know the information in connection with the provision
                        of the Services, provided that they are bound by
                        obligations of confidentiality no less stringent than
                        those contained in these terms and conditions.
                      </p>
                      <p>
                        6.3. The obligations of confidentiality under this
                        clause will survive the termination of these terms and
                        conditions.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Termination</h4>
                      <p>
                        8.1. Either party may terminate these terms and
                        conditions by giving written notice to the other party.
                      </p>
                      <p>
                        8.2. If the Client terminates these terms and
                        conditions, the Client will be liable to pay
                        ConstantinePr for all Services provided up to the date
                        of termination.
                      </p>
                      <p>
                        8.3. The provisions of clauses 5, 6, 7, 9, and 10 will
                        survive the termination of these terms and conditions.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>General</h4>
                      <p>
                        10.1. These terms and conditions constitute the entire
                        agreement between the parties and supersede all prior
                        agreements and understandings, whether written or oral,
                        relating to the provision of the Services.
                      </p>
                      <p>
                        10.2. These terms and conditions may not be amended
                        except in writing signed by both parties.
                      </p>
                      <p>
                        10.3. The Client may not assign or transfer any of its
                        rights or obligations under these terms and conditions
                        without the ConstantinePr’s prior written consent.
                      </p>
                      <p>
                        10.4. If any provision of these terms and conditions is
                        held to be invalid or unenforceable, the remaining
                        provisions will remain in full force and effect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="termsofuse">
              <div className="container-fluid">
                <div className="row">
                  <h1 className="termsheading">Terms Of Use</h1>
                  <div className="col-md-6">
                    <div className="termscontent">
                      <h4>Intorduction</h4>
                      <p>
                        Welcome to ConstantinePr. This Terms of Use Policy
                        ("Policy") applies to your use of our website, services,
                        and all other products and services we offer
                        (collectively, "Services"). By accessing or using our
                        Services, you agree to be bound by this Policy.
                        <br />
                        <br />
                        <br />
                        <br />
                        To transmit or procure the sending of, any advertising
                        and/or promotional material without our documented
                        consent.
                        <br />
                        <br />
                        To either impersonate, or make attempt(s) to impersonate
                        ConstantinePr, a ConstantinePr employee, another user,
                        and/or any other person or entity.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Intellectual Property Rights</h4>
                      <p>
                        The content, organization, graphics, design,
                        compilation, digital conversion, and other matters
                        related to the Services are protected under applicable
                        copyrights, trademarks, and other proprietary rights.
                      </p>
                      <p>
                        The copying, redistribution, use, or publication by you
                        of any such matters or any part of the Services, except
                        as allowed by this Policy, is strictly prohibited.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Limitations of Liability</h4>
                      <p>
                        In no event shall ConstantinePr be liable for any
                        direct, indirect, incidental, special, consequences, or
                        punitive damages, or any damages whatsoever arising from
                        the use of, or the inability to use, the Services, or
                        any information, content, materials, products, and other
                        services included on or otherwise made available to you
                        through the Services, including, not limited to, damaged
                        for loss of profits, goodwill, use, data, or other
                        intangible losses.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Governing Law</h4>
                      <p>
                        This Policy shall be governed by and construed in
                        accordance with the laws of the Islamic Republic of
                        Pakistan without giving effect to any principles of
                        conflicts of law.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="termscontent">
                      <h4>Use of Services</h4>
                      <p>
                        You may use our Services only for lawful purposes and in
                        accordance with this Policy.
                        <br />
                        <br />
                        You agree not to use our Services: You may only use our
                        Services for lawful means and ends, and in accordance
                        with this Policy.
                        <br />
                        <br />
                        You agree not to use our Services: In any way that
                        violates any applicable federal, provincial, local
                        and/or international law and/or regulation.
                        <br />
                        <br />
                        <br />
                        To engage in any other conduct that inhibits anyone’s
                        use of the Services, or which, as determined by us, may
                        harm ConstantinePr or users of the Services or expose
                        them to liability.
                      </p>
                      <p>
                        The Services and all information, content, materials,
                        products and other services and/or solutions made
                        available to you through the Services are provided by
                        ConstantinePr on an “as is” and “as available” basis.
                        <br />
                        <br />
                        ConstantinePr makes no representations or warranties of
                        any kind, express or implied, as to the operation of the
                        Services, or the information, content, materials,
                        products or other services and/or solutions made
                        available to you through the services.
                        <br />
                        <br />
                        You expressly agree that your use of the Services is at
                        your sole risk.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Indemnification</h4>
                      <p>
                        You agree to indemnify, defend, and hold harmless
                        ConstantinePr and its affiliates, and their respective
                        officers, directors, employees, agents, licensors, and
                        suppliers from and against all claims, losses, expenses,
                        damages, and costs arising from or relating to your use
                        of the Services or your violation of this Policy.
                      </p>
                    </div>
                    <div className="termscontent">
                      <h4>Changes to Policy</h4>
                      <p>
                        ConstantinePr reserves the right to modify or update
                        this Policy at any time and without prior notice.
                        <br />
                        <br />
                        Your continued use of our Services after any
                        modifications to this Policy shall constitute your
                        acceptance of the modified Policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Termsandconditions;
