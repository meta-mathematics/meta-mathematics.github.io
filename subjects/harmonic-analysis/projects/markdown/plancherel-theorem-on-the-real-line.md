# Plancherel Theorem on the Real Line

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** HA-04  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

With $\widehat f(\xi)=\int_{\mathbb R}f(x)e^{-2\pi ix\xi}\,dx$ on Schwartz functions, prove the transform extends uniquely to a unitary map on $L^2(\mathbb R)$ preserving the L² norm.

**Foundations and permitted imports:**

A Schwartz function and all its derivatives decay faster than every power. Import Fourier inversion on S(R) with convention fhat(ξ)=∫f(x)e^(−2πixξ)dx: f(x)=∫fhat(ξ)e^(2πixξ)dξ. The transform and inverse preserve S, proved by differentiation and integration by parts. Schwartz functions are dense in L²(R); L² is complete. These are substantial supporting modules, explicitly imported rather than inferred from norm preservation.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Inner-product preservation on Schwartz space
N2 [v1] Unique L² extension
  N1 -- E1: The Fourier transform preserves inner products and norms on S. --> N2
N3 [v1] Surjectivity and unitarity
  N2 -- E2: A unique linear isometric extension U:L²→L² with closed range. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The Fourier transform preserves inner products and norms on S. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | A unique linear isometric extension U:L²→L² with closed range. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Inner-product preservation on Schwartz space

**Object, role, and local target:** Use inversion before extending the transform. The required export is: The Fourier transform preserves inner products and norms on S.

**Inputs:** f,h∈S; inversion and absolute integrability; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-04.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain f,h∈S; inversion and absolute integrability; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Use inversion before extending the transform. |
| Sense | Absolute integrability for Fubini is checked on this domain. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The Fourier transform preserves inner products and norms on S. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Unique L² extension

**Object, role, and local target:** Complete the isometry without using a pointwise integral for every L² function. The required export is: A unique linear isometric extension U:L²→L² with closed range.

**Inputs:** Schwartz density and norm preservation; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-04.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Schwartz density and norm preservation; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Complete the isometry without using a pointwise integral for every L² function. |
| Sense | L² equivalence classes do not necessarily have an absolutely convergent Fourier integral. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** A unique linear isometric extension U:L²→L² with closed range. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Surjectivity and unitarity

**Object, role, and local target:** Show the range contains a dense subset. The required export is: The transform extends uniquely to a unitary L² map.

**Inputs:** Inversion on S and closed range; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-04.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Inversion on S and closed range; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Show the range contains a dense subset. |
| Sense | Isometry alone does not imply onto; use dense range plus closedness. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** The transform extends uniquely to a unitary L² map. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Inner-product preservation on Schwartz space

1. Inversion for h and conjugation give conj(h(x))=∫conj(hhat(ξ))e^(−2πixξ)dξ.

2. Since‖f‖₁‖hhat‖₁<∞, Fubini applies to its product with f(x).

3. Thus ∫f(x)conj(h(x))dx=∫[∫f(x)e^(−2πixξ)dx]conj(hhat(ξ))dξ=∫fhat(ξ)conj(hhat(ξ))dξ.

4. Taking h=f proves‖fhat‖₂=‖f‖₂ on S.

### §4.N2 — Unique L² extension

1. For f∈L² choose f_j∈S with f_j→f inL².

2. The norm identity makes fhat_j Cauchy, so it converges to an L² element Uf.

3. A second approximating sequence gives the same limit by‖fhat_j−ghat_j‖₂=‖f_j−g_j‖₂.

4. This defines a linear isometry extending the transform, uniquely because S is dense.

5. Its range is closed: a convergent sequence Uf_j makes f_j Cauchy, and its limit maps to the given range limit.

### §4.N3 — Surjectivity and unitarity

1. Every g∈S is the transform of its Schwartz inverse transform; hence S lies in the range of U.

2. The range is closed and contains dense S, so it is all L².

3. Inner-product preservation passes from Schwartz approximations to L² limits.

4. Thus U is unitary with its inverse obtained by the same completion of the inverse transform.

## 5. Worked instance and boundary audit

For f(x)=e^(−πx²), the Gaussian integral calculation gives fhat=f under this convention. Both squared norms equal∫e^(−2πx²)dx=1/√2. The inverse phase has the opposite sign; retaining2π avoids an erroneous normalization factor.

**Boundary or failed-argument audit:**

The function(1+|x|)^(−3/4) belongs toL² but notL¹. Its Fourier transform is defined by completion, not an absolutely convergent integral at every frequency. Sense rejects a pointwise-integral export for allL² inputs and retains the equivalence-class contract.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `HA-04`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

- [MIT Topics in Fourier Analysis: inversion and Schwartz functions](https://ocw.mit.edu/courses/res-18-015-topics-in-fourier-analysis-spring-2024/mitres_18_015_s24_full_lec.pdf).

[Branch index](../README.md)
