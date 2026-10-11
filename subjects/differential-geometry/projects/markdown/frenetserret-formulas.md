# Frenet–Serret Formulas

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** DG-01  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a $C^3$ unit-speed curve $\gamma:I\to\mathbb R^3$ with curvature $\kappa=\|\gamma''\|>0$, define $T=\gamma'$, $N=T'/\kappa$, $B=T\times N$, $\tau=-B'\cdot N$. Prove $T'=\kappa N$, $N'=-\kappa T+\tau B$, and $B'=-\tau N$.

**Foundations and permitted imports:**

Use a C³ unit-speed curve γ with κ=‖γ″‖>0. Differentiation of inner products and cross products is foundational. T,N,B form the positively oriented frame with B=T×N; torsion is defined as τ=−B′·N. No Frenet–Serret formulas are imported.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Build the orthonormal moving frame
N2 [v1] Normal derivative coefficients
  N1 -- E1: An orthonormal frame and T′=κN. --> N2
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | An orthonormal frame and T′=κN. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |

## 3. Node roles and faculty activities

### N1/v1 — Build the orthonormal moving frame

**Object, role, and local target:** Differentiate T·T=1 before normalizing. The required export is: An orthonormal frame and T′=κN.

**Inputs:** Unit speed; κ>0; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `DG-01.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Unit speed; κ>0; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Differentiate T·T=1 before normalizing. |
| Sense | If κ=0 the definition of N divides by zero. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** An orthonormal frame and T′=κN. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Normal derivative coefficients

**Object, role, and local target:** Differentiate orthogonality identities to determine components. The required export is: N′=−κT+τB and B′=−τN.

**Inputs:** Orthonormal frame and first formula; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `DG-01.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Orthonormal frame and first formula; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Differentiate orthogonality identities to determine components. |
| Sense | The torsion sign depends on the fixed B=T×N convention. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** N′=−κT+τB and B′=−τN. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Build the orthonormal moving frame

1. Let T=γ′.

2. Unit speed gives T·T=1 and hence T′·T=0.

3. Define N=T′/κ; it has unit length and is perpendicular toT.

4. Then B=T×N is perpendicular to both, of unit length, and the ordered frame(T,N,B) is positive.

5. By definition T′=κN.

6. C³ regularity and κ>0 ensure N andB are differentiable.

### §4.N2 — Normal derivative coefficients

1. From N·N=1 obtain N′·N=0.

2. Differentiating N·T=0 gives N′·T=−N·T′=−κ.

3. From B·B=1 and B·T=0 obtain B′·B=0 and B′·T=−B·T′=0.

4. Thus B′ is a multiple ofN.

5. Its coefficient is−τ by the torsion definition, so B′=−τN.

6. Differentiating B·N=0 gives N′·B=−B′·N=τ; expanding in the frame yields N′=−κT+τB.

## 5. Worked instance and boundary audit

For the helix γ(s)=(a cos(s/c),a sin(s/c),b s/c), where a>0,c=√(a²+b²), speed is 1. Calculation yields κ=a/c² and τ=b/c². For b=0 the circle has τ=0 and the binormal is constant.

**Boundary or failed-argument audit:**

A straight unit-speed line has κ=0. It has many possible normal directions, so this Frenet frame is undefined there. Sense blocks division by κ; an alternative frame such as a parallel/Bishop frame would be a separately specified construction.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `DG-01`, version 1, and the proof with every reuse. Intermediate exports E1–E2 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
