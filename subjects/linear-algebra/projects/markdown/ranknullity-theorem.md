# Rank–Nullity Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** LA-01  
**Level:** Introductory    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a linear map $T:V\to W$ with finite-dimensional $V$, prove $\dim V=\dim\ker T+\dim\operatorname{im}T$.

**Foundations and permitted imports:**

All vector spaces are over one field F. V is finite-dimensional; W need not be. Import basis extension in a finite-dimensional vector space, and the definitions of kernel, image, linear independence, and span. The zero-dimensional cases use an empty basis.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Extend a kernel basis
N2 [v1] Image independence and dimension
  N1 -- E1: The images Tv₁,…,Tv_r span the image. --> N2
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | The images Tv₁,…,Tv_r span the image. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |

## 3. Node roles and faculty activities

### N1/v1 — Extend a kernel basis

**Object, role, and local target:** Complete the basis in the domain, not the codomain. The required export is: The images Tv₁,…,Tv_r span the image.

**Inputs:** T linear; u₁,…,u_k basis of kerT; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-01.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain T linear; u₁,…,u_k basis of kerT; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Complete the basis in the domain, not the codomain. |
| Sense | The added basis vectors must complement the whole kernel. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** The images Tv₁,…,Tv_r span the image. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Image independence and dimension

**Object, role, and local target:** Pull a zero combination back to the kernel. The required export is: Rank–nullity with no finiteness requirement on W.

**Inputs:** Extended domain basis; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `LA-01.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Extended domain basis; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Pull a zero combination back to the kernel. |
| Sense | A spanning list alone cannot be counted as a basis. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Rank–nullity with no finiteness requirement on W. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Extend a kernel basis

1. Choose a basis u₁,…,u_k ofkerT and extend it to u₁,…,u_k,v₁,…,v_r ofV.

2. Thus dimV=k+r.

3. For any x∈V write x=∑a_i u_i+∑b_j v_j.

4. ApplyingT yields Tx=∑b_jTv_j because every u_i lies in the kernel.

5. Hence the vectorsTv_j spanimT.

### §4.N2 — Image independence and dimension

1. If∑b_jTv_j=0 then∑b_jv_j lies inkerT, so equals∑a_i u_i.

2. Independence of the extended basis forces allb_j and a_i zero.

3. Thus Tv_j are independent and form a basis ofimT.

4. Therefore dimimT=r and dimV=k+r=dimkerT+dimimT.

5. If r=0 this is the empty image basis; if k=0 it states injective maps preserve domain dimension.

## 5. Worked instance and boundary audit

For T:R³→R², T(x,y,z)=(x+y,z), the kernel has basis(1,−1,0). Extend by(0,1,0),(0,0,1); their images are(1,0),(0,1). Thus3=1+2, and the proof visibly constructs the image basis.

**Boundary or failed-argument audit:**

The numerical formula uses finite dimensions. With an infinite-dimensional domain one needs cardinal-dimension statements and appropriate basis principles; subtracting “infinite rank” from “infinite dimension” is not valid arithmetic. Sense keeps this studio’s finite-dimensional input contract.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `LA-01`, version 1, and the proof with every reuse. Intermediate exports E1–E2 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

The elementary argument is developed here from the explicitly declared foundations and local imports.

[Branch index](../README.md)
