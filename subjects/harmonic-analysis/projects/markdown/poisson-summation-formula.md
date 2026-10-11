# Poisson Summation Formula

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** HA-05  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For $f\in\mathcal S(\mathbb R)$ with HA-04’s Fourier convention, prove $\sum_{n\in\mathbb Z}f(n)=\sum_{k\in\mathbb Z}\widehat f(k)$.

**Foundations and permitted imports:**

Use Schwartz rapid-decay bounds for f and its derivatives. Import uniqueness of Fourier coefficients for continuous periodic functions from HA-03, scaled to period1; if a continuous function has all coefficients zero, L² density makes it zero everywhere. Only absolutely convergent integrals and sums are interchanged.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Smooth periodization
N2 [v1] Fourier coefficients of the periodization
  N1 -- E1: A smooth periodic function P with absolutely convergent periodization. --> N2
N3 [v1] Reconstruct and evaluate at zero
  N2 -- E2: The kth coefficient of P is fhat(k). --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | A smooth periodic function P with absolutely convergent periodization. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | The kth coefficient of P is fhat(k). | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Smooth periodization

**Object, role, and local target:** Use rapid decay uniformly on a fundamental interval. The required export is: A smooth periodic function P with absolutely convergent periodization.

**Inputs:** f∈S(R); foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-05.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain f∈S(R); foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Use rapid decay uniformly on a fundamental interval. |
| Sense | Decay estimates must be uniform in x, not merely pointwise. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** A smooth periodic function P with absolutely convergent periodization. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Fourier coefficients of the periodization

**Object, role, and local target:** Unfold the integral into all translated intervals. The required export is: The kth coefficient of P is fhat(k).

**Inputs:** Uniform summability on[0,1]; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-05.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Uniform summability on[0,1]; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Unfold the integral into all translated intervals. |
| Sense | The integer k is crucial for the phase cancellation. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** The kth coefficient of P is fhat(k). Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Reconstruct and evaluate at zero

**Object, role, and local target:** Prove absolute Fourier convergence before point evaluation. The required export is: Poisson summation for Schwartz functions with the stated Fourier convention.

**Inputs:** Smooth P and identified coefficients; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `HA-05.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Smooth P and identified coefficients; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Prove absolute Fourier convergence before point evaluation. |
| Sense | An L² identity alone would not license evaluation at a chosen point. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Poisson summation for Schwartz functions with the stated Fourier convention. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Smooth periodization

1. For x∈[0,1] and each derivative orderr, |f^{(r)}(x+n)|≤C_r(1+|n|)^(−2) after enlarging the constant for finitely many n.

2. Hence P(x)=∑_n f(x+n) and every derivative series converge uniformly absolutely.

3. Termwise differentiation shows P is smooth; shifting the integer index shows P is 1-periodic.

### §4.N2 — Fourier coefficients of the periodization

1. For k∈Z, its Fourier coefficient is ∫₀¹P(x)e^(−2πikx)dx=∑_n∫₀¹f(x+n)e^(−2πikx)dx.

2. Substitute u=x+n.

3. Since e^(2πikn)=1, the sum of integrals over[n,n+1] equals∫_R f(u)e^(−2πiku)du=fhat(k).

4. All rearrangements follow from absolute integrability.

### §4.N3 — Reconstruct and evaluate at zero

1. Integrating by parts twice in the coefficient formula for periodic P, with matching endpoint derivatives, gives |fhat(k)|≤‖P″‖₁/(4π²k²) for k≠0.

2. Thus Q(x)=∑_k fhat(k)e^(2πikx) converges uniformly absolutely and is continuous.

3. Its coefficients equal those of P by termwise integration.

4. Fourier uniqueness makes P=Q.

5. Atx=0 this gives∑_n f(n)=P(0)=Q(0)=∑_k fhat(k).

6. Both numerical series are absolutely convergent.

## 5. Worked instance and boundary audit

For f(x)=e^(−πt x²), t>0, the Gaussian transform is t^(−1/2)e^(−πξ²/t). Thus ∑_n e^(−πt n²)=t^(−1/2)∑_k e^(−πk²/t). At t=1 the two series agree termwise; at other t the formula relates different Gaussian scales.

**Boundary or failed-argument audit:**

Changing a function only at integers leaves its Lebesgue Fourier transform unchanged but can change the left-hand sampled sum. This shows why arbitraryL¹ equivalence classes cannot satisfy a point-sampling formula without additional regularity. Sense retains the Schwartz scope.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `HA-05`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

- [MIT Number Theory I, Lecture 17: Schwartz Fourier transform and Poisson summation](https://math.mit.edu/classes/18.785/2025/LectureNotes17.pdf).

[Branch index](../README.md)
