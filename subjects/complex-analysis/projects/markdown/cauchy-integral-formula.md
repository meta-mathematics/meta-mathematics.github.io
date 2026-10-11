# Cauchy Integral Formula

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** CA-01  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Let $f$ be holomorphic on an open neighborhood of the closed disk $\overline{D(z_0,R)}$. For $w$ inside the disk, prove $f(w)=\frac1{2\pi i}\oint_{|z-z_0|=R}f(z)/(z-w)\,dz$, with positive orientation.

**Foundations and permitted imports:**

Holomorphic means complex differentiable on an open neighborhood of the closed disk. Import Cauchy–Goursat in a finitely connected region with piecewise smooth boundary: the positively oriented boundary integral of a holomorphic function is zero. Also use continuity and the parametrization of a circle. Inner boundary components carry clockwise induced orientation.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Excise the evaluation point
N2 [v1] Evaluate the shrinking circle
  N1 -- E1: The outer integral equals the counterclockwise inner integral. --> N2
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The outer integral equals the counterclockwise inner integral. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |

## 3. Node roles and faculty activities

### N1/v1 — Excise the evaluation point

**Object, role, and local target:** Move the integral to a small circle without crossing a singularity. The required export is: The outer integral equals the counterclockwise inner integral.

**Inputs:** w inside disk; f holomorphic near closure; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-01.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain w inside disk; f holomorphic near closure; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Move the integral to a small circle without crossing a singularity. |
| Sense | The singular point must be removed; the sign of the inner boundary matters. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The outer integral equals the counterclockwise inner integral. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Evaluate the shrinking circle

**Object, role, and local target:** Subtract the constant value and estimate the remainder. The required export is: f(w)=(2πi)⁻¹ times the given boundary integral.

**Inputs:** Equality of integrals; continuity at w; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `CA-01.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Equality of integrals; continuity at w; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Subtract the constant value and estimate the remainder. |
| Sense | An integral bound uses circumference2πρ and denominatorρ; they cancel. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** f(w)=(2πi)⁻¹ times the given boundary integral. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Excise the evaluation point

1. Choose ρ>0 so the closed disk about w of radiusρ lies inside D(z₀,R).

2. On the region between the outer circle and this small disk, h(z)=f(z)/(z−w) is holomorphic.

3. Cauchy–Goursat with its induced boundary orientations gives ∮outer h dz−∮|z−w|=ρ h dz=0, where both displayed circles are individually counterclockwise.

### §4.N2 — Evaluate the shrinking circle

1. Split f(z)=f(w)+(f(z)−f(w)).

2. The constant part integrates to 2πif(w), since z=w+ρe^{it} gives dz/(z−w)=i dt.

3. The remainder satisfies |∮(f(z)−f(w))/(z−w) dz|≤2π sup_|z−w|=ρ|f(z)−f(w)|→0 by continuity.

4. The outer integral is independent of ρ, so takingρ→0 gives ∮outer f(z)/(z−w)dz=2πif(w), the desired formula.

## 5. Worked instance and boundary audit

For f(z)=z²+1, z₀=0,R=2,w=1, the formula predicts ∮(z²+1)/(z−1)dz=4πi. Algebraically z²+1=(z−1)(z+1)+2; the polynomial term integrates to 0 and 2/(z−1) integrates to 4πi.

**Boundary or failed-argument audit:**

For w on the boundary the integrand is singular on the contour, and the excision argument is unavailable. Sense rejects the interior formula there; boundary limiting theorems require a different contract. Reversing the contour gives the negative of the stated integral.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `CA-01`, version 1, and the proof with every reuse. Intermediate exports E1–E2 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [Harvard complex analysis: Cauchy formula, argument principle, and Riemann mapping lectures](https://people.math.harvard.edu/~siu/math113/).

[Branch index](../README.md)
